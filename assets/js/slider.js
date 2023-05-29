// ------auto-slider-----
$(function () {
    $("#slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});


// ----overflow-slider-------

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '.next_btn',
    prevArrow: '.pre_btn',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1.4
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1.01
        }
    }]
});

// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
