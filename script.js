function getSelectedFruit() {
    // Get the dropdown element
    var dropdown = document.getElementById("fruitSelect");
    
    // Get the selected option
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    // Display the selected option
    var result = document.getElementById("selectedFruit");
    result.textContent = "กรุณาเลือก อำเภอ: " + selectedOption;
  }
  