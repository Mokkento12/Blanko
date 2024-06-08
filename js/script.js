const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".nav__links");
const headerInput = document.querySelector(".header__input");
const headerButton = document.querySelector(".header__button");
const headerContainer = document.querySelector(".header__container");

function toggleMenu() {
  navLinks.classList.toggle("open");
  headerInput.classList.toggle("open");
  headerButton.classList.toggle("open");
  headerContainer.classList.toggle("menu-open");
}

hamburger.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
