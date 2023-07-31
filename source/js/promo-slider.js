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
