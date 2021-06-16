"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow", function() {
		AOS.init({
			easing: 'ease-in-out-sine'
		});
});
	$("#preloader .clock").fadeOut();
});

document.addEventListener('DOMContentLoaded', function() {



//------------------------------------------------------------------------------------
//								COUNT UP SCRIPT
//------------------------------------------------------------------------------------

var counter_4col_2 = $('#counter-4col-2').waypoint({
	handler: function(direction) {
		$(this.element).find('.count-up-data').each(function(i, el){
			var endVal = el && Number.isInteger(el.textContent * 1) ? el.textContent * 1 : 100 ;
			$(el ).countup({endVal: endVal, options: { separator : ''}});
		});
        counter_4col_2[0].disable();
	},
	offset: '90%'
});


//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-4item-dots').owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }

});





});
