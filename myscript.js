/*========================================
                preloader
=========================================*/
$(window).on('load', function () {
    $('#preloader_status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*========================================
            Team Owl Carousel
=========================================*/

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });
});


/*========================================
            waypoints progress bars
=========================================*/
$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 500);
        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*========================================
            Responsive Tabs
=========================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });

});

/*========================================
            Isotope-Portfolio
=========================================*/
$(window).on('load', function () {


    // init Isotope
    var $grid = $('.grid').isotope({});

    // filter items on button click
    $('.portfolio-buttons').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

        /*--Adding active class--*/
        $('.portfolio-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

/*========================================
            magnetic Popup
=========================================*/
$(function () {
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});



/*========================================
            Testimonial- Owl Carousel
=========================================*/

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });

});



/*========================================
            Counter
=========================================*/
$(function () {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});


/*========================================
                Clients-Owl Carousel
=========================================*/
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>']
    });
});

/*========================================
                Navigator
=========================================*/
$(function () {

    showHideWhiteNav();

    $(window).scroll(function () {
        showHideWhiteNav();


    });

    function showHideWhiteNav() {
        if ($(window).scrollTop() > 50) {


            //Show White Nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "images/preloader/preloader.gif");

            //Show Back to Top Button
            $("#back-to-top").fadeIn();


        } else {
            //Hide White Nav
            $("nav").removeClass("white-nav-top");

            //show logo
            $(".navbar-brand img").attr("src", "images/logo/logo1.jpg");

            //Show Back to Top Button
            $("#back-to-top").fadeOut();
        }


    }


});
/*smooth Scrolling*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 62
        }, 1000, "");
    });
});