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

  $('.reviews-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeead: 5000,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeead: 5000,
        }
    }]
  });

})