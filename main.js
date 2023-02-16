const menuEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
	aside.classList.add('inactive')
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
	aside.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
	mobileMenu.classList.add('inactive')
	desktopMenu.classList.add('inactive')
	aside.classList.toggle('inactive');
}
