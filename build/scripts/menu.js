const initMenuSlder = () => {
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

$(document).ready(() => {
    initMenuSlder();
});
