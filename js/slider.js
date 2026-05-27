document.addEventListener('DOMContentLoaded', function () {
  const rrSliderEl = document.querySelector('.rr-swiper');

  if (rrSliderEl) {
    new Swiper(rrSliderEl, {
      loop: true,
            spaceBetween: 20,
            slidesPerView: 2.2,

            autoplay: {
                delay: 20000, // 20 секунд
                disableOnInteraction: false,
            },

            pagination: {
        el: '.rr-pagination',
        clickable: true,
      },

      // Навігація (стрілки)
      navigation: {
        nextEl: '.rr-btn-next',
        prevEl: '.rr-btn-prev',
      },
    });
  }
});

const rrSliderEl2 = document.querySelector('.rr-swiper-2');

if (rrSliderEl2) {
  new Swiper(rrSliderEl2, {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,

    autoplay: {
      delay: 20000, // 20 секунд
      disableOnInteraction: false,
    },

    pagination: {
      el: '.rr-pagination-2',
      clickable: true,
    },

    navigation: {
      nextEl: '.rr-btn-next-2',
      prevEl: '.rr-btn-prev-2',
    },
  });
}