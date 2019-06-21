$(function(){
	'use strict';
	$(window).scroll(function()

	{
			var navbar =$('.navbar');
			if ($(window).scrollTop()>= navbar.height()) {


				navbar.addClass('scrolled');
			   }
			else{
				navbar.removeClass('scrolled');
			    }


	});


// deal with tabs 
$('.tab-switch li').click(function(){

	//adds selcted class to active link 
	$(this).addClass('selected').siblings().removeClass('selected');

	//hide all dive
	$('.tab-section .tabs-content > div').hide();
	//show the div connected with this link 
	$('.'+ $(this).data('mydive')).show();

});


});