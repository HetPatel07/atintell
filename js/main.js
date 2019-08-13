$(document).ready(function() {

    console.log(window.innerHeight);

    function updateBox(e) {
        if (e.type == "progress" && window.innerWidth >= "1224") {
            $('#mainText').text(Math.floor((Math.random() * 15) + 1));
        } else {
            $('#mainText').text("15");
        }
    }


    var rule = CSSRulePlugin.getRule(".main::after");
    var windowHeight = parseInt($(window).innerHeight()) / 2;
    var firstTween = new TimelineMax();
    var speechTween = new TimelineMax();
    var tranformTween = new TimelineMax();
    var appHeight = new TimelineMax();
    var appHeight1 = new TimelineMax();
    var appHeight2 = new TimelineMax();
    var appHeight3 = new TimelineMax();
    var appHeight4 = new TimelineMax();
    var appHeight5 = new TimelineMax();
    var appliancesPart = $('.appliancesPart').width();
    console.log(appliancesPart);
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
    // .set('.speech', {
    //     transform: "translateX(50%)",
    // })
        .to('.speech', .5, {
        transform: "translateX(0)",
        opacity: 1
    })

    tranformTween
        .set('.wrapInner', {
            x: '0',
            transition: "1s",
        })
        .to('.wrapInner', .01, {
            // x: '-' + appliancesPart + 'px',
            x: '-2670px',
            transition: "1s"
        })
        // appHeight
        //     .set('.appbox p', {
        //         height: '0',
        //         transition: "1s all",
        //     })
        //     .to('.appbox p', 1, {
        //         // x: '-' + appliancesPart + 'px',
        //         height: '203px',
        //         transition: "1s all"
        //     })

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
            triggerElement: '.wrapInner',
            offset: windowHeight,
        })
        .setTween(speechTween)
        .addTo(controller);

    // scene 4 start

    var scene4 = new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: 0,
            duration: appliancesPart,
            ease: Quad.linear,
            triggerHook: 0
        })
        .setTween(tranformTween)
        .addIndicators()
        .setPin(".wrapInner")

    .addTo(controller);


    // scene 5 start
    var elemnts = $('.appbox p');
    console.log(windowHeight);
    var scene5 = new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[0], 1, { height: "0px", ease: Quad.easeOut }))
        .addIndicators()
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight + 150,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[1], 1, { height: "0px", ease: Quad.easeOut }))

    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight + 300,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[2], 1, { height: "0px", ease: Quad.easeOut }))

    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight + 450,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[3], 1, { height: "0px", ease: Quad.easeOut }))

    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight + 600,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[4], 1, { height: "0px", ease: Quad.easeOut }))

    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.wrapInner',
            offset: windowHeight + 750,
            duration: "250px",
            triggerHook: 0
        })
        .setTween(TweenMax.from(elemnts[5], 1, { height: "0px", ease: Quad.easeOut }))
        .addTo(controller);


    TweenMax.to("#main", 1, {
        backgroundImage: "url(/img/bgmain.jpg)",
        transitionDelay: ".5s"
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

    var wrapMainWidth = $('.wrapInner').width();

    $('.wrapInner').css({
        'height': wrapMainWidth,
    })
    console.log(wrapMainWidth);
});