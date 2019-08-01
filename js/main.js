$(document).ready(function() {


    var click = 0;

    var imageUrl = "/img/bgmain.jpg";

    $("#main").css("background-image", "url(" + imageUrl + ")");
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

    })

});