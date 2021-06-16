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

//start spr-countdown
var $header_center_timer_countdown = $('#header-center-timer-countdown');
$header_center_timer_countdown.countdown('2018/09/03 23:59:59', function (event) {
    $header_center_timer_countdown.find('.days').html(event.strftime('%D'));
    $header_center_timer_countdown.find('.hours').html(event.strftime('%H'));
    $header_center_timer_countdown.find('.minutes').html(event.strftime('%M'));
    $header_center_timer_countdown.find('.seconds').html(event.strftime('%S'));
}).on('finish.countdown', function () {
}//end finish.countdown
);//end spr-countdown
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
$('#popup-form-halfbg-form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
    },
    errorPlacement: function (error, element) {

        if ((element.attr("type") == "radio") || (element.attr("type") == "checkbox")) {
            error.appendTo($(element).parents("div").eq(0));
        } else {
            error.insertAfter(element);
        }
    }
});

//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------

$('#popup-form-halfbg-form').submit(function () {
    // submit the form
    //data area
    var data = [];
    var $fields = $(this).find('.form-group, div.radio');
    $fields.each(function(indx, el){
        if ($( el ).hasClass('radio')) {
            var name = $( el ).find('.label-name').html();
            var $radioinput = $(el).find('input');
            $( el).find('input').each(function(indx, el){
                if ( $(el)[0].checked) {
                    var value = $(el).parent().find('span.lbl').html();
                    data.push({ name: name, value: value, name_attr: $radioinput.attr('name') });
                    return;
                }
            });
        } else if ($( el ).find('input').attr('type') === 'checkbox') {
            var $input = $( el ).find( 'input' );
            data.push( {name: $input.attr( 'placeholder' ), value: 'checked', name_attr: $input.attr('name')} );
        } else if ($( el ).find('select')[0]) {
            var name = $( el ).find('select option' ).val();
            var $select = $(el).find('select');
            data.push({ name: name, value: $select.val(), name_attr: $select.attr('name')});
        } else if ($( el ).find('textarea')[0]) {
            var $textarea = $(el).find('textarea');
            data.push({ name: $textarea.attr('placeholder'), value: $textarea.val(), name_attr: $textarea.attr('name') });
        } else {
            var $input = $(el).find('input');
            data.push({ name: $input.attr('placeholder'), value: $input.val(), name_attr: $input.attr('name') });
        }
    });
    //end data area
    if ($(this).valid()) {
        $(this).find('[type=submit]').button('loading');
        var form = new FormData();
        var $inputFiles = $('.inputfile');
        $inputFiles.each(function(indx, inputFile){
            $.each(inputFile.files, function(i, file) {
                form.append('file-' + indx + '-' + i, file);
            });
        });
        form.append('data', JSON.stringify(data));
        form.append('id', this.id);
        var action = $(this).attr('action');
        $.ajax({
            url: action,
            type: 'POST',
            data: form,
            cache: false,
            contentType: false,
            processData: false,
            success: function () {
                $('#popup-form-halfbg-form').find('[type=submit]').button('complete');
            },
            error: function () {
                $('#popup-form-halfbg-form').find('[type=submit]').button('reset');
            }
        });
    } else {
        //if data was invalidated
    }
    return false;
});



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
