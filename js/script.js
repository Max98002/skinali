document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.getElementById('menu-button'),
    menu = document.getElementById('menu');

  const openMenu = () => {
    menu.classList.toggle('menu_active');
  }

  menuButton.addEventListener('click', openMenu);

  


})