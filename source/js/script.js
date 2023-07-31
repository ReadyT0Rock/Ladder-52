/* Открытие, закрытие навигации */
let burger = document.querySelector('.header__burger');
let navigation = document.querySelector('.navigation');

if (navigation) {
  burger.onclick = function () {
  burger.classList.remove('header__burger--nojs');
  navigation.classList.remove('navigation--nojs');
    if (burger.classList.contains('header__burger--close')) {
      navigation.classList.remove('navigation--close');
      navigation.classList.add('navigation--open');
      burger.classList.remove('header__burger--close');
      burger.classList.add('header__burger--open');
    } else if (burger.classList.contains('header__burger--open')) {
      navigation.classList.remove('navigation--open');
      navigation.classList.add('navigation--close');
      burger.classList.remove('header__burger--open');
      burger.classList.add('header__burger--close');
    }
  }
}

/* Открытие попапа "Отправить заявку" */
let popupApplication = document.querySelector('.popup-send-application');
let buttonApplication = document.querySelector('.promo__btn');
let buttonClosePopup = document.querySelector('.popup-send-application__btn-close');

if (buttonApplication) {
  buttonApplication.onclick = function () {
    popupApplication.classList.add('popup-send-application--opened');
  }
}

if (popupApplication) {
  buttonClosePopup.onclick = function () {
    popupApplication.classList.remove('popup-send-application--opened');
  }
}

/* Завка отправлена */
let applicationForm = document.querySelector('.popup-send-application__form');
let contentForm = document.querySelector('.popup-send-application__content');
let messageThanks = document.querySelector('.popup-send-application__wrapper-thanks');

if (popupApplication) {
  applicationForm.onsubmit = function (evt) {
    evt.preventDefault();
    contentForm.classList.add('popup-send-application__content--closed');
    messageThanks.classList.add('popup-send-application__wrapper-thanks--opened');
  }
}


/* Политика конфиденциальности */
let popupPrivacy = document.querySelector('.popup-privacy');
let buttonClose = document.querySelector('.popup-privacy__btn-close');
let buttonOpenQuestionsPrivacy = document.querySelector('.questions__privacy');
let buttonOpenFooterPrivacy = document.querySelector('.footer__link-privacy');
let buttonOpenModelPrivacy = document.querySelector('.model__privacy');

if (buttonOpenQuestionsPrivacy) {
  buttonOpenQuestionsPrivacy.onclick = function () {
    popupPrivacy.classList.add('popup-privacy--opened');
  };
}

if (buttonOpenFooterPrivacy) {
  buttonOpenFooterPrivacy.onclick = function () {
    popupPrivacy.classList.add('popup-privacy--opened');
  };
}

if (buttonOpenModelPrivacy) {
  buttonOpenModelPrivacy.onclick = function () {
    popupPrivacy.classList.add('popup-privacy--opened');
  }
}

buttonClose.onclick = function () {
  popupPrivacy.classList.remove('popup-privacy--opened');
}

/* Слайдер */

const swiper = new Swiper('.swiper', {
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
  breakpoints: {
    1418: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});
