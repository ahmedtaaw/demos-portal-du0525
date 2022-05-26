import "./scss/app.scss";
var $ = require("jquery");
window.jQuery = $;
window.$ = $;

require('slick-carousel');



//slick slider
var $status = $('.main-slider-pagingInfo');
var $slickElement = $('.main-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});
$(document).ready(function () {
    $slickElement.slick({
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    })
    
    $(".secondary-slider").slick({
        infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          focusOnSelect: true,
          touchThreshold: 10,
          swipeToSlide: true,
    });
});