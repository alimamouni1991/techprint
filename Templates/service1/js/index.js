"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow");
	$("#preloader .clock").fadeOut();
});

document.addEventListener('DOMContentLoaded', function() {







$('.carousel-single-dots-height').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    rewind: true,
    items: 1
});



});
