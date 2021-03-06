"use strict";

window.addEventListener('load', function() {
//------------------------------------------------------------------------
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------

$('.gallery').each(function () { // the containers for all your galleries
    var $this = $(this);
    $this.magnificPopup({
        delegate: 'a.gallery-box:not(.external)', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function (item) {
                return item.el.find('span.caption').text();
            }
        },
        callbacks: {
            open: function() {
                $this.trigger('stop.owl.autoplay');
            },
            close: function() {
                $this.trigger('play.owl.autoplay');
            }
        }
    });
});

});
window.addEventListener('load', function() {
	$('a.smooth').smoothScroll({speed: 800});
});

$('.single-iframe-popup').magnificPopup({
	type: 'iframe',
	iframe: {
		patterns: {
			youtube: {
				index: 'www.youtube.com/',
				id: 'v=',
				src: 'https://www.youtube.com/embed/%id%?autoplay=1'
			}
			, vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: 'https://player.vimeo.com/video/%id%?autoplay=1'
			}
		}
	}
});
$('.single-image-popup').magnificPopup({
	type: 'image'
});