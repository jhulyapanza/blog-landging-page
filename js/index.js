const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');
const btnHamburguer = document.querySelector('.hamburguer');

btnClose.addEventListener('click', menuHideShow);
btnHamburguer.addEventListener('click', menuHideShow);

function menuHideShow(){
  menu.classList.toggle('menu-hide')
  btnHamburguer.classList.toggle('hamburguer-hide')
}