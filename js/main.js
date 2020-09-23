$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var kiddies = $('.kiddies').offset().top;
        if (scrollDistance >= 50) {
            $('#sidebar').addClass('sticky');
        } else {
            $('#sidebar').removeClass('sticky');
        }
    });

    $('#icon-menu').click(function() {
        $('#menu').toggleClass('show-menu');
    });
});