import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import initValidator from './parts/validator'

const lazyLoad = () => {
  $('.js-lazy').each((index, el) => {
    const $image = $(el);
    const realSrc = $image.attr('data-src');
    console.log(realSrc);
    $image.attr('src', realSrc);
  });
}

$(document).ready(() => {
  initPopups();
  initSliders();
  initValidator();
  lazyLoad();
});
