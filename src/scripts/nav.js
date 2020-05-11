let openMenu = document.querySelector('.nav__toggle');
let menu = document.querySelector('.nav__list');
let overflow = document.querySelector('.overflow');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  openMenu.classList.toggle('nav__toggle--close');
  overflow.classList.toggle('hidden');
});