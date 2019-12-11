$(function(){
    new WOW().init();

});

//Show / Hide Nav bar on scroll

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() < 50 ) {
            $("nav").removeClass("leo-top-nav")
        } else {
            $("nav").addClass("leo-top-nav")
        }
    })
});

//Smooth Scrolling
$(function(){
    $("a.smooth-scroll").click(function(e){
        e.preventDefault();
        let section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 1000);
    })
});