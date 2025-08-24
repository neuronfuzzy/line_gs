<style>
html, body {
 height: 100%;
 margin: 0;
 padding: 0;
}
#map {
 width: 100%;
 height: 400px;
}
.controls {
 margin-top: 10px;
 border: 1px solid transparent;
 border-radius: 2px 0 0 2px;
 box-sizing: border-box;
 -moz-box-sizing: border-box;
 height: 32px;
 outline: none;
 box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
#searchInput {
 background-color: #fff;
 font-family: Roboto;
 font-size: 15px;
 font-weight: 300;
 margin-left: 12px;
 padding: 0 11px 0 13px;
 text-overflow: ellipsis;
 width: 50%;
}
#searchInput:focus {
 border-color: #4d90fe;
}

</style>
ส่วนของการอ้างอิง libraries เพื่อใช้งาน Google API
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJuwG3dwl8tnkWxHhVeujsFLemtwNkNKc&libraries=places&callback=initMap" async defer></script>
ส่วนของการประกาศค่าเริ่มต้นและตัวแปร รวมถึงการเรียกใช้งานฟังก์ชั่นเพื่อใช้ในการแสดงผล
<script>
/***** function ในการประกาศค่าเริ่มต้นให้กับแผนที่*****/
 function initMap() {
 
 /***** กำหนดรายละเอียดคุณสมบัติของแผนที่*****/
 var map = new google.maps.Map(document.getElementById('map'), {
 center: {lat: -33.8688, lng: 151.2195},
 zoom: 13
 });

 /***** กำหนดตำแหน่งที่ตั้งของ control ที่จะวางในแผนที่*****/
 var input = document.getElementById('searchInput');
 map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

 /***** เพิ่ม Feature ให้กับ textbox ให้สามารถพิมพ์ค้นหาสถานที่ได้*****/
 var autocomplete = new google.maps.places.Autocomplete(input);
 autocomplete.bindTo('bounds', map);

 var infowindow = new google.maps.InfoWindow();
 
 /***** กำหนดคุณสมบัติให้กับตัวพิกัดจุดหรือ marker *****/
 var marker = new google.maps.Marker({
 map: map,
 anchorPoint: new google.maps.Point(0, -29)
 });

 /***** ทำงานกับ event place_changed หรือเมื่อมีการเปลี่ยนแปลงค่าสถานที่ที่ค้นหา*****/
 autocomplete.addListener('place_changed', function() {
 infowindow.close();
 marker.setVisible(false);
 var place = autocomplete.getPlace();
 if (!place.geometry) {
 window.alert("ไม่ค้นพบพิกัดจากสถานที่ดังกล่าว");
 return;
 }

 /***** แสดงผลบนแผนที่เมื่อพบข้อมูลที่ต้องการค้นหา *****/
 if (place.geometry.viewport) {
 map.fitBounds(place.geometry.viewport);
 } else {
 map.setCenter(place.geometry.location);
 map.setZoom(17);
 }
 marker.setIcon(({
 url: place.icon,
 size: new google.maps.Size(71, 71),
 origin: new google.maps.Point(0, 0),
 anchor: new google.maps.Point(17, 34),
 scaledSize: new google.maps.Size(35, 35)
 }));
 marker.setPosition(place.geometry.location);
 marker.setVisible(true);
 
 /***** แสดงรายละเอียดผลลัพธ์การค้นหา *****/
 var address = '';
 if (place.address_components) {
 address = [
 (place.address_components[0] && place.address_components[0].short_name || ''),
 (place.address_components[1] && place.address_components[1].short_name || ''),
 (place.address_components[2] && place.address_components[2].short_name || '')
 ].join(' ');
 }
 /***** แสดงรายละเอียดผลลัพธ์การค้นหาเป็น popup โดยมีชื่อและสถานที่ดังกล่าว *****/
 infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
 infowindow.open(map, marker);

 /***** แสดงรายละเอียดผลลัพธ์การค้นหา ซึ่งประกอบด้วย ที่อยู่ รหัสไปรษณีย์ ประเทศ ละติจูดและลองจิจูด *****/
 for (var i = 0; i < place.address_components.length; i++) {
 if(place.address_components[i].types[0] == 'postal_code'){
 document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
 }
 if(place.address_components[i].types[0] == 'country'){
 document.getElementById('country').innerHTML = place.address_components[i].long_name;
 }
 }
 document.getElementById('location').innerHTML = place.formatted_address;
 document.getElementById('lat').innerHTML = place.geometry.location.lat();
 document.getElementById('lon').innerHTML = place.geometry.location.lng();
 });
}
</script>