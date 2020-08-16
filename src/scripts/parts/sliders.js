const prevArrow = '<button class="slide-prev slide-button"></button>';
const nextArrow = '<button class="slide-next slide-button"></button>';

const prevArrowDark = '<button class="slide-prev-dark slide-button slide-rec"></button>';
const nextArrowDark = '<button class="slide-next-dark slide-button slide-rec"></button>';

export function initMenuSlder(){
    $('.nav-menu').slick({
      arrows: false,
      speed: 500,
      variableWidth: true,
      infinite: false,
      slidesToShow: 9,
      slidesToScroll: 9,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

export function initItemSlider(){
    $('#item-preview').slick({
        asNavFor: '#item-nav',
        arrows: false,
        slidesToShow: 1,
    });
    $('#item-nav').slick({
      arrows: false,
      speed: 500,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect: true,
      asNavFor: '#item-preview',
    });
    $('#slider-recommend').slick({
      arrows: true,
      speed: 500,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: prevArrowDark,
      nextArrow: nextArrowDark,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }

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

export default function initSliders() {
    initHeaderSlider();
    initBodySlider();
  }
