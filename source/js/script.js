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
