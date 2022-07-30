const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Teclado",
  price: 100,
  imagen:
    "https://computronik.com.ec/wp-content/uploads/2020/09/teclado-gamer-retroiluminado-D_NQ_NP_783934-MEC42361752801_062020-F-1024x727.jpg",
});
productList.push({
  name: "Teclado Flex",
  price: 180,
  imagen:
    "https://i0.wp.com/movilesbaratos.com.mx/wp-content/uploads/2017/02/teclado_portatil_enrollable.jpg?fit=1200%2C1200&ssl=1",
});
productList.push({
  name: "Monitor",
  price: 1200,
  imagen:
    "https://www.gacomputers.in/wp-content/uploads/2020/12/acer-23-8-inch-ips-led-with-webcam-monitor-b247y-1.jpg",
});

for (product of productList) {
  const producCard = document.createElement("div");
  producCard.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.imagen);

  const producInfo = document.createElement("div");
  producInfo.classList.add("product-info");

  const producInfoDiv = document.createElement("");
  const producPrice = document.createElement("p");
  producPrice.innerText = "$" + product.price;
  const producName = document.createElement("p");
  producName.innerText = product.name;

  producInfoDiv.appendChild(producPrice);
  producInfoDiv.appendChild(producName);

  const producInfoFigure = document.createElement("figure");
  const producImgCard = document.createElement("img");
  img.setAttribute("src", "../icons/bt_add_to_cart.svg");

  producInfoFigure.appendChild(producImgCard);
}
