document.addEventListener("DOMContentLoaded", () => {
    // FIRST SLIDER
    const firstSliderEl = document.querySelector(".first-swiper");

    if (firstSliderEl) {
        new Swiper(firstSliderEl, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1.1,

            autoplay: {
                delay: 20000, // 20 секунд
                disableOnInteraction: false,
            },

            pagination: {
                el: ".first-slider-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".s8__arrow-next",
                prevEl: ".s8__arrow-prev",
            },
        });
    }

    // SECOND SLIDER
    const secondSliderEl = document.querySelector(".second-swiper");

    if (secondSliderEl) {
        new Swiper(secondSliderEl, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,

            autoplay: {
                delay: 20000, // 20 секунд
                disableOnInteraction: false,
            },

            pagination: {
                el: ".second-slider-pagination",
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
            },

            navigation: {
                nextEl: ".s8__arrow-next",
                prevEl: ".s8__arrow-prev",
            },
        });
    }

    // GALLERY SLIDER
    const galleryEl = document.querySelector(".gallery-swiper");

    if (galleryEl) {
        new Swiper(galleryEl, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 2,
            centeredSlides: false,

            autoplay: {
                delay: 20000, // 20 секунд
                disableOnInteraction: false,
            },
        });
    }
});