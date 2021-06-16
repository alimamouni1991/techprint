"use strict";
window.addEventListener('load', function() {
	AOS.init({
		easing: 'ease-in-out-sine'
	});
});

document.addEventListener('DOMContentLoaded', function() {

//start spr-countdown
var $header_img_timer_countdown = $('#header-img-timer-countdown');
$header_img_timer_countdown.countdown('2018/11/03 23:59:59', function (event) {
    $header_img_timer_countdown.find('.days').html(event.strftime('%D'));
    $header_img_timer_countdown.find('.hours').html(event.strftime('%H'));
    $header_img_timer_countdown.find('.minutes').html(event.strftime('%M'));
    $header_img_timer_countdown.find('.seconds').html(event.strftime('%S'));
}).on('finish.countdown', function () {
}//end finish.countdown
);//end spr-countdown



//------------------------------------------------------------------------------------
//								COUNT UP SCRIPT
//------------------------------------------------------------------------------------

var counter_text_2col = $('#counter-text-2col').waypoint({
	handler: function(direction) {
		$(this.element).find('.count-up-data').each(function(i, el){
			var endVal = el && Number.isInteger(el.textContent * 1) ? el.textContent * 1 : 100 ;
			$(el ).countup({endVal: endVal, options: { separator : ''}});
		});
        counter_text_2col[0].disable();
	},
	offset: '90%'
});

});
