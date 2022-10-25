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

new Swiper('.swiper.gallery__slider', {
    slidesPerView: 3.2,
    centeredSlides: true,
    spaceBetween: 45,
    loop: true,
    speed: 500,

    navigation: {
        nextEl: '.gallery .gallery__slider-btns.swiper-button-next',
        prevEl: '.gallery .gallery__slider-btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 3.2,
            spaceBetween: 45,
        }
    },
});

new Swiper('.swiper.shop__slider', {
    slidesPerView: 4.5,
    spaceBetween: 20,

    navigation: {
        nextEl: '.shop .shop__slider-btns.swiper-button-next',
        prevEl: '.shop .shop__slider-btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});