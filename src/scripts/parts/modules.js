export const addToCard = () => {
    let cart = JSON.parse(localStorage.getItem('ShoppingCart'));
    if (!cart){
      cart = {};
      cart.count = 1;
    }else
      cart.count++;
    localStorage.setItem('ShoppingCart', JSON.stringify(cart));
    const shoppingBug = $('#shopping-bug');
    shoppingBug.css('display', 'block');
    shoppingBug.html(cart.count);
  }

export const beforeChange = (event, slick, currentSlide, nextSlide) =>{
    const nSlide = slick.$slides.get(nextSlide);
    const header = $("header")[0];
    if (nSlide.classList.contains('dark')){
      header.classList.add('dark');
    }else{
      header.classList.remove('dark');
    }
  }
