const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
shopCar.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function toggleCarAside() {

const inMobileMenuClosed =mobileMenu.classList.contains('inactive')
const isAsideClosed =aside.classList.contains('inactive')

  aside.classList.toggle("inactive");
  if(mobileMenu.classList.contains('inactive'))
}
