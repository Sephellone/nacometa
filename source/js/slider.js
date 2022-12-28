// import {Swiper} from './swiper-bundle.js';

new Swiper('.active-users__slider-wrapper', {
  direction: 'horizontal',
  loop: true,
  mousewheel: {
    sensitivity: 1,
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  // watchOverflow: true,
});
