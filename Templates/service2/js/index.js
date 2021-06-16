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
//						OFFCANVAS MENU SETTINGS
//------------------------------------------------------------------------
$(".off-canvas-toggle, .off-canvas-overlay").click(function () {
    $("body").toggleClass("off-canvas-active");
});

$('.goodshare').getCount();





//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-single-dots').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    rewind: true,
    items: 1
});



$('.carousel-single-dots').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    rewind: true,
    items: 1
});



});
