'use strict'

import initSliders from './parts/sliders';
import {beforeChange} from './parts/modules';


$(document).ready(() => {
  initSliders();
  $('#promo-slider').on('beforeChange', beforeChange);
});
