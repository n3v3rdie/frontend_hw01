'use strict'

const prevArrow = '<button class="slide-prev slide-button"></button>';
const nextArrow = '<button class="slide-next slide-button"></button>';

const initHeaderSlider = () => {
  $('#promo-slider').slick({
      centerMode: true,
      speed: 500,
      fade: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
  });
}

const initBodySlider = () => {
  $('#product-slider').slick({
      arrows: false,
      infinite: true,   
      speed: 500,
      centerMode: true,
      variableWidth: true,
  });
}

$(document).ready(() => {
  initHeaderSlider();
  initBodySlider();
  $('#promo-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    const nSlide = slick.$slides.get(nextSlide);
    const header = $("header")[0];
    if (nSlide.classList.contains('dark')){
      header.classList.add('dark');
    }else{
      header.classList.remove('dark');
    }
  });
});
