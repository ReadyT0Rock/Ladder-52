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
