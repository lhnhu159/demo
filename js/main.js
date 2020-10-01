$(document).ready(function() {
    setInterval(function() {
            if ($(window).width() < 1100) {
                $('#navbar').removeClass('sticky');

            }
        },
        500)

    $(".text-show").hide();
    $('.item-details').click(function(e) {
        e.stopPropagation();
        $(".text-show").show();
        const thistoggle = $(this).find(".text-show");
        const thisadd = $(this).find(".show");
        const thishide = $(this).find(".hide");
        const thisitem = $(this);
        $(".item-details").each(function() {
            if (thisitem[0] != $(this)[0] && $(this).find(".text-show").hasClass("toggle-details")) {
                $(this).find(".text-show").removeClass('toggle-details');
                $(this).find(".show").removeClass('hide-add');
                $(this).find(".hide").removeClass('show-hide');
            }

        })
        thistoggle.toggleClass('toggle-details');
        thisadd.toggleClass('hide-add');
        thishide.toggleClass('show-hide');
    });

    $('#mapbtn').click(function() {
        $('#map').addClass('show-map');
    });

    $('.icon-menu').click(function() {
        $('#menu').toggleClass('show-menu');
    })


    $(window).on('scroll', function() {
        const navbar = $('#navbar');
        const scrollTop = $(window).scrollTop();
        const para1 = $('#para1');
        const para2 = $('#para2');
        const para3 = $('#para3');
        const para4 = $('#para4');
        var speed = 0.2;
        if (scrollTop >= navbar.offset().top && $(window).width() > 1100) {
            navbar.addClass('sticky');
        }
        if ($(window).width() <= 600) {
            para1.css("background-position-x", (0 + ((scrollTop - para1.offset().top - 400) * speed)) + 'px');
            para2.css("background-position-x", (0 + ((scrollTop - para2.offset().top - 400) * speed)) + 'px');
        } else {
            para1.css("background-position-x", (0 + ((scrollTop - para1.offset().top - 600) * speed)) + 'px');
            para2.css("background-position-x", (0 + ((scrollTop - para2.offset().top - 600) * speed)) + 'px');
        }

        para3.css("background-position-y", (0 + ((scrollTop - para3.offset().top - 200) * speed)) + 'px');

        if ($(window).width() <= 1700) {
            para4.css("background-position-y", (0 - ((scrollTop - para4.offset().top + 700) * speed)) + 'px');
        } else {
            para4.css("background-position-y", (0 - ((scrollTop - para4.offset().top + 1500) * speed)) + 'px');
        }

    });
});
$(document).ready(function() {
    $('a[href^="#"]').bind('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700, function() {
            location.hash = target;
        });
        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 200;
    $('.page-section').each(function(i) {
        if ($(this).offset().top <= scrollDistance && $(this).offset().top + $(this).height()) {
            $('#menu a').removeClass('active');
            if (i <= 3) {
                $('#menu a').eq(i).addClass('active');
            } else {
                $('#menu a').eq(i + 1).addClass('active');
            }

        }
    });
}).scroll();