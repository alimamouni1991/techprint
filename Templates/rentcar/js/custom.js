
window.addEventListener('load', function() {
	$('a.smooth').smoothScroll({speed: 800});
});
window.addEventListener('load', function() {
	$('body').delegate('input[type=text].datepicker-input', 'focusin', function(){
		$(this).datepicker({
			format: 'dd.mm.yyyy',
			weekStart: 1,
			autoclose: true,
			todayHighlight: true
		});
	});
});
