$(window).resize(navScroll);
$(document).ready(navScroll);
$(window).scroll(navScroll);


function navScroll() {
    if ($(window).width() >= 992) {
        var scrollTop = 0;
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').css({
                "padding": "0px"
            })

            $(".scrollD").css({
                "padding-top": "0px",
                "padding-bottom": "0px"
            })

            $('#global-nav').addClass('scrolled-nav');

        } else if (scrollTop < 100) {
            $(".scrollD").css({
                "padding-top": "10px",
                "padding-bottom": "10px"
            })

            $('#global-nav').removeClass('scrolled-nav');
        }
    } else {
        $(".scrollD").css({
            "color": "white",
            "padding-bottom": "10px",
            "padding-top": "10px"
        })

        $('#global-nav').css({
            "padding": "21px",
            "padding-top": "8px",
            "padding-bottom": "8px"
        })
    }
}