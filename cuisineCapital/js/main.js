    var scrollButton = $("#angle-down");
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 90) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });


// scroll rendre e nav bar transpar

window.onscroll = () => {
  const nav = document.querySelector('.navbar');
  if(this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-light bg-light sticky-top '; 
  else nav.className = 'navbar navbar-expand-lg navbar-light bg-light sticky-top stickk';
};


//Le Zome img sur un pop-up

$(document).ready(function() {
  var modal = $('#myModal')
  var span = $(".close")  
  var modalImg = $("#img01")
  var captionText = $("#caption")
 
  var img = $('.myImg')
 
 img.click(function(){
      modal.css('display', 'block')
      modalImg.attr('src', this.src)
      captionText.html(this.alt)
  });
 
  span.click(function() {
    modal.css('display', 'none')
	});
});

//   hover and zomm image 
$(document).ready(function(){
  $('img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});