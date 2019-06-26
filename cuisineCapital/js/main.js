    var scrollButton = $("#angle-down");
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 90) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });


function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}