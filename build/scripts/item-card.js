const prevArrow = '<button class="slide-prev-dark slide-button slide-rec"></button>';
const nextArrow = '<button class="slide-next-dark slide-button slide-rec"></button>';


const initItemSlider = () => {
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
      prevArrow: prevArrow,
      nextArrow: nextArrow,
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

const initTableSizePopup = () => {
  $('.popup-with-move-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom',
      closeMarkup: '<button type="button" class="mfp-close"></button>',
  });
}

const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem('ShoppingCart'));
  if (!cart)
    cart.count = 1;
  else
    cart.count++;
  localStorage.setItem('ShoppingCart', JSON.stringify(cart));
  const shoppingBug = $('#shopping-bug');
  shoppingBug.css('display', 'block');
  shoppingBug.html(cart.count);
}

$(document).ready(() => {
    initTableSizePopup();
    initItemSlider();
});
