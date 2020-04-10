$(document).ready(function () {

//slider

	
    $(' .creation-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area ').addClass('navbar_fixed');

                    $('.header_area .main-menu .navbar .navbar-brand .logo-img').css({
                        'width':'2rem',
                        'padding-bottom': '30%'
                    });
                    $('.header_area .main-menu .navbar').css('padding',' 0');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                    $('.header_area .main-menu .navbar .navbar-brand .logo-img').css({
                        'width':'7rem',
                        'padding-bottom': '80%'
                    });
                     $('.header_area .main-menu .navbar').css('padding',' .5rem');
                }
            })
        }
    }

    navbarFixed();

    // login

    

});
$(document).ready(function () {
	$('#login').click(function(){
    	$('.overlay-2').css({
    		'display': 'flex',
			'justify-content': 'center',
			'align-items': 'center'
    	});
    });
    $('.hide').click(function(){
    	$('.overlay-2').hide();
    })


    $('#signup').click(function(){
    	$('.overlay-3').css({
    		'display': 'flex',
			'justify-content': 'center',
			'align-items': 'center'
    	});
    });
    $('.hide-signup').click(function(){
    	$('.overlay-3').hide();
    })

});