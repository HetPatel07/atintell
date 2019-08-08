$(document).ready(function() {

    function updateBox(e) {
        if (e.type == "progress") {
            $('#mainText').text(Math.floor((Math.random() * 15) + 1));
        } else {
            $('#mainText').text("15");
        }
    }


    var rule = CSSRulePlugin.getRule(".main::after");
    var windowHeight = parseInt($(window).innerHeight()) / 2;
    var firstTween = new TimelineMax();
    var speechTween = new TimelineMax();
    firstTween
        .set(rule, {
            opacity: 0,
            transitionDelay: 0
        })
        .to(rule, .01, {
            opacity: 1,
            transitionDelay: 0
        })

    speechTween
        .set('.speech', {
            transform: "translateX(50%)",
        })
        .to('.speech', .5, {
            transform: "translateX(0)",
            opacity: 1
        })

    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '.mainTransform1',
            duration: '100%',
            offset: windowHeight
        })
        .setTween(firstTween)
        .addTo(controller);

    // scene 2

    var scene2 = new ScrollMagic.Scene({
            triggerElement: '.apptechmain',
            duration: '50%',
        })
        .on("progress end", updateBox)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
            triggerElement: '.apptechmain',
            offset: windowHeight,
            duration: '10px'
        })
        .setTween(speechTween)
        .addIndicators()
        .addTo(controller);
    TweenMax.to("#main", 1, {
        backgroundImage: "url(/img/bgmain.jpg)",
        transitionDelay: "0s"
    });
    TweenMax.to(".content img", 1.5, {
        opacity: "1",
    });
    TweenMax.to(".content h2", 1.5, {
        opacity: "1",
    });
    TweenMax.to(".content h4", 1.5, {
        y: "0",
        opacity: "1",
        transitionDelay: "1"
    }), "-=1";
    TweenMax.to(".content .dash-bottom", 1.5, {
        y: "0",
        transitionDelay: ".5s",
        opacity: 1,
    });


    var click = 0;

    var imageUrl = "/img/bgmain.jpg";

    // $("#main").css("background-image", "url(" + imageUrl + ")");
    var navHeight = $('.header').css('height');

    $('.sidebar').css('top', navHeight);
    console.log(navHeight);

    $('#sidebar').click(function() {
        $('.sidebarmain').toggleClass("sidebarmain1");

        $('.sidebar').toggleClass("transform");
        var sbwidth = $('.sidebar').css('width');
        if (click == 0) {
            $('.mainTransform').css('transform', 'translateX( -' + sbwidth + ')');
            click = 1;
        } else {
            $('.mainTransform').css('transform', 'translateX(0)');
            click = 0;
        }

    });

    var wrapMainWidth = $('.wrapMain').width();

    $('.wrapMain').css({
        'height': wrapMainWidth,
    })
    console.log(wrapMainWidth);
});