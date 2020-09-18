AOS.init();
$(document).ready(function() {
    var element_position = $('.signup').offset().top;

    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var signup = $('.signup').offset();
        if (scrollDistance >= signup.top) {
            parallaxSignup();
        }
    });
    setTimeout(function() {
        $('.item-content').addClass('is-animated');
    }, 5);
    owl = $('#head-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        navText: ["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"],
    });
    owl.on('changed.owl.carousel', function(e) {
        $('.item-content').removeClass('is-animated');
        setTimeout(function() {
            $('.item-content').addClass('is-animated');
        }, 700);
    });

    $('.nav-btn').click(function() {
        $('.item-content').removeClass('is-animated');
        setTimeout(function() {
            $('.item-content').addClass('is-animated');
        }, 700);
    })
    $('#testimonials-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',


    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 100) {
            $('.topbar').addClass("sticky");
            $('#top-page').addClass("show-toppage");
        } else if ($(window).scrollTop() < 20) {
            $('.topbar').removeClass("sticky");
            $('#top-page').removeClass("show-toppage");
        }


    });

    $('#icon-menu').click(function() {
        $('#menu').toggleClass('show-menu');
    });

    $('#top-page').click(function() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    function parallaxSignup() {
        var scrollPos = $(window).scrollTop(),
            speed = 0.3;
        var signupps = $('.signup').offset();
        $(".signup").css("background-position-y", (0 - ((scrollPos - signupps.top) * speed)) + 'px');
    }

});