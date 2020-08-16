'use strict'

import initTableSizePopup from './parts/popups';
import {initItemSlider} from './parts/sliders';
import {addToCard} from './parts/modules'

$(document).ready(() => {
    initTableSizePopup();
    initItemSlider();
    $('#button-buy').on('click', addToCard);
});
