// Services
$(function(){
    //animate on scroll;
    new WOW().init();
});

//Work section
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    });
});

// Team Section

$(function (){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        load: true,
        autoplayHoverPause: true
    });
});