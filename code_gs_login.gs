//
var ss= SpreadsheetApp.openByUrl('URL Sheet');
function doGet(e) {

  var htmlOutput =  HtmlService.createTemplateFromFile('Login');
  htmlOutput.message = '';
  return htmlOutput.evaluate();
}

function doPost(e) {
  Logger.log(JSON.stringify(e));
  if(e.parameter.LoginButton == 'Login')
  {    
    var username = e.parameter.username;
    var password = e.parameter.password;
    var checkanswer = checkLogin(username, password);
    if(checkanswer == 'TRUE')
    {

     var htmlOutput =  HtmlService.createTemplateFromFile('Welcome');
     htmlOutput.username = username.toUpperCase();
     htmlOutput.message = '';
     return htmlOutput.evaluate();
    }
    else
    {
      var htmlOutput =  HtmlService.createTemplateFromFile('Login');
      htmlOutput.message = 'กรอกชื่อผู้ใช้หรือรหัสผ่านผิด';
      return htmlOutput.evaluate();     
    }   
  }
  else if(e.parameter.LogoutButton == 'Logout')
  {
    LogOutUserNow(e.parameter.username);
    var htmlOutput =  HtmlService.createTemplateFromFile('Login');
    htmlOutput.message = 'คุณออกจากระบบแล้ว';
    return htmlOutput.evaluate(); 
  }
}

function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}

function checkLogin(username, password) {
  var usernamesheet = ss.getSheets()[0]
  var currentsheet = ss.getSheets()[1]
  var usernameLastRow =  usernamesheet.getLastRow();
  var currentLastRow =  currentsheet.getLastRow();
  var found_record = '';
  for(var y = 2; y <= currentLastRow; y++)
  {
    if(currentsheet.getRange(y, 1).getValue().toUpperCase() == username.toUpperCase())
    {
     found_record = 'TRUE';
     var d = new Date();
     currentsheet.getRange(y, 2).setValue(d);
    }      
  }
  if(found_record == '')
  {
    for(var i = 2; i <= usernameLastRow; i++)
    {
      if(usernamesheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
        usernamesheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
        {
          found_record = 'TRUE';
          currentsheet.appendRow([username.toUpperCase(), new Date()]);
        }    
    }
  }  
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  return found_record; 
}

function LogOutUserNow(username)
{
  var currentsheet = ss.getSheets()[1]
  var currentLastRow =  currentsheet.getLastRow();
  for(var y = 2; y <= currentLastRow; y++)
  {
    if(currentsheet.getRange(y, 1).getValue() == username.toUpperCase())
    {
     currentsheet.getRange(y, 3).setValue('X');
    }      
  }
  for(var y = 2; y <= currentLastRow; y++)
  {
    if(currentsheet.getRange(y, 3).getValue() == 'X')
    {
     currentsheet.deleteRow(y);
    }      
  }
}

function LogOutUser()
{
  var currentsheet = ss.getSheets()[1]
  var currentLastRow =  currentsheet.getLastRow();
  var ThirtyMinutesAgo = new Date( Date.now() - 30000 * 60 );
  for(var y = 2; y <= currentLastRow; y++)
  {
    if(currentsheet.getRange(y, 2).getValue() < ThirtyMinutesAgo)
    {
     currentsheet.getRange(y, 3).setValue('X');
    }      
  }
  for(var y = 2; y <= currentLastRow; y++)
  {
    if(currentsheet.getRange(y, 3).getValue() == 'X')
    {
     currentsheet.deleteRow(y);
    }      
  }
}

