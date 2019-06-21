$(function(){
	'use strict';
	// ajust slide
	var winh   = $(window).height(),
		upperh = $('.upper-bar').innerHeight(),
		navh   = $('.navbar').innerHeight();

	$('.slider, .carousel-item').height(winh - ( upperh + navh ));



// featured work 
$('.featured-work ul li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
if ($(this).data('class') === 'all') {

	$('.shuffel-image .col-md').css('opacity',1);	
}
else{
	$('.shuffel-image .col-md').css('opacity','.2');
	$($(this).data('class')).parent().css('opacity',1);


}


});
});