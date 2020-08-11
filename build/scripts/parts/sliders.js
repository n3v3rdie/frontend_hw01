const prevArrow = '<button class="slide-prev slide-button"></button>';
const nextArrow = '<button class="slide-next slide-button"></button>';

const initHeaderSlider = () => {
    // $('.main-slider').slick({
    //     adaptiveHeight: true,
    //     speed: 500,
    //     fade: true,
    //     prevArrow: prevArrow,
    //     nextArrow: nextArrow,
    //     asNavFor: '.nav-slider',
    // });
    // $('.nav-slider').slick({
    //     vertical: true,
    //     arrows: false,
    //     infinite: true,
	// 	slidesToShow: 3,
    //     asNavFor: '.main-slider',
    //     focusOnSelect: true,
    // });
}

const initBodySlider = () =>{
    $('#product-slider').slick({
        arrows: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinite: true,   
        speed: 500,
        // prevArrow: prevArrow,
        // nextArrow: nextArrow,
        variableWidth: true,
    });
}

export default function initSliders() {
    initHeaderSlider();
    initBodySlider();
  }
