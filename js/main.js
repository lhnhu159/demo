$(document).ready(function() {
    var popup=$('#popup-container');
    var play=$('#play');
    var close=$('#icon-exit');
    play.click(function (){
        popup.show();
        setTimeout(function(){
            $('.popupVideo').addClass('showpopup');
            popup.addClass('bg');
        },5);
        
    });
    close.click(function (){
        popup.hide();
        $('.popupVideo').removeClass('showpopup');
        popup.removeClass('bg');
    });
    $(window).on('click',function(event){
        if($(event.target).is('#popup-container')){
            popup.hide();
            $('.popupVideo').removeClass('showpopup');
            popup.removeClass('bg');
        }
    });
    $('#slider-menu .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('#icon-menu').click(function(){
        $('#menu').toggleClass('show-menu');
    });
    $('#icon-dropdown').click(function(){
        $('#sub-menu').toggleClass('show-submenu');
        $('#menu').toggleClass('height-menu');
    });

    $(window).bind("scroll", function() {
        parallaxheader();
        parallaxTour();
        parallaxAppointment();
    });
    $('#top-page').click(function (){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    });
});
$(window).on('scroll',function(){
    if($(window).scrollTop()>=100){
        $('.top-bar').addClass("sticky");
        $('#top-page').addClass("show-toppage");
    }
    else if($(window).scrollTop()<20){
        $('.top-bar').removeClass("sticky");
        $('#top-page').removeClass("show-toppage");
    }
});
function parallaxheader() {
    var scrollPos = $(window).scrollTop(),
            speed = 0.3;
    $("header").css("background-position-y", (0 - (scrollPos * speed)) + 'px');
}

function parallaxTour() {
    var scrollPos = $(window).scrollTop(),
            speed = 0.3;
    $(".tour").css("background-position-x", (0 - (scrollPos * speed)) + 'px');
}

function parallaxAppointment() {
    var scrollPos = $(window).scrollTop(),
            speed = 0.3;
    $(".appointment").css("background-position-x", (0 + (scrollPos * speed)) + 'px');
}