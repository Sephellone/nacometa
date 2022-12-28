// import {Swiper} from './swiper-bundle.js';

const activeUsersSlider = new Swiper('.active-users__slider-wrapper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  slideToClickedSlide: true,
  watchOverflow: true,
});


const textReviewsSlider = new Swiper('.reviews__text-slider-wrapper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  slideToClickedSlide: true,
  watchOverflow: true,

  breakpoints: {
   880: {
      spaceBetween: 40,
    }
  },

  pagination: {
    el: '.reviews__text-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const videoReviewsSlider = new Swiper('.reviews__video-slider-wrapper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 13,

  slideToClickedSlide: true,
  watchOverflow: true,

  breakpoints: {
    880: {
       spaceBetween: 20,
     }
   },
});
