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
let contentForm = document.querySelector('.popup-send-application__content');
let messageThanks = document.querySelector('.popup-send-application__wrapper-thanks');
let buttonSendApplication = document.querySelector('.popup-send-application__btn');

if (popupApplication) {
    buttonSendApplication.onclick = function () {
      contentForm.classList.add('popup-send-application__content--closed');
      messageThanks.classList.add('popup-send-application__wrapper-thanks--opened');
    }
}

