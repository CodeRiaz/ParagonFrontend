$(document).ready(function () {
    $('.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("header--solid");
        } else {
            $(".header").removeClass("header--solid");
        }
    });

    $('.product-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        arrows: true,
        centerPadding: '0px',
        draggable: false
    });

});

function scrollToPos(target, act) {
    if (target == "#") {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    } else {
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    }
}

(function ($) {
    function floatLabel(inputType) {
        $(inputType).each(function () {
            var $this = $(this);
            $this.focus(function () {
                $this.next().addClass("active");
            });
            $this.blur(function () {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel(".floatLabel");
})(jQuery);

$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    removalDelay: 300,
    showCloseBtn: false
});

$('.close-btn').on("click", function () {
    $.magnificPopup.close();
});
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('menu-opened');
		$('.header--menu').toggleClass('opened');
	});
});

$(window).on("load",function(){ 
    $(".horizontal-scroll").mCustomScrollbar({
        axis:"x", 
        advanced:{autoExpandHorizontalScroll:true}
    });
});