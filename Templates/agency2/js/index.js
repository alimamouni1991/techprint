"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow");
	$("#preloader .clock").fadeOut();
});

document.addEventListener('DOMContentLoaded', function() {





//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-6item-fluid').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 0,
    nav: false,
    dots: false,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        },
        1300: {
            items: 6
        }
    }

});






});
