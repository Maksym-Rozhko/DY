import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper.events__slider', {
    slidesPerView: 4.5,
    spaceBetween: 20,

    navigation: {
        nextEl: '.events .events__slider-btns.swiper-button-next',
        prevEl: '.events .events__slider-btns.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      }
  },
});