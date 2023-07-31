let examples = document.querySelector('.examples-slider');
let finished = document.querySelector('.finished-projects-slider');
let promo = document.querySelector('.promo-slider');
let reviews = document.querySelector('.reviews-slider');

if(examples) {
  const examplesSlider = new Swiper('.examples-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if(finished) {
  const finishedProjects = new Swiper('.finished-projects-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1418: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });
}

if(promo) {
  const promoSlider = new Swiper('.promo-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
    },
    speed: 5000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });
}

if(reviews) {
  const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-back',
    },
  });

}
