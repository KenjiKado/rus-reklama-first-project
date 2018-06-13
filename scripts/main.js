'use strict';
$(document).ready(() => {
    $('.mobile-menu__icon').on('click touch', () => {
        $('.mobile-menu').fadeToggle(1500);
        $('body').toggleClass('blocked');
    })
})