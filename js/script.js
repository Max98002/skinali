document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.getElementById('menu-button'),
    menu = document.getElementById('menu');

  const openMenu = () => {
    menu.classList.toggle('menu_active');
  }

  menuButton.addEventListener('click', openMenu);

  $(".before-after").twentytwenty({
    before_label: 'До скиналі',
    after_label: 'После скиналі'
  });

  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    swipe: false,
    nextArrow: $('.arrow-left'),
    prevArrow: $('.arrow-right')
  });

})