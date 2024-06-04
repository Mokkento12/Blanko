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
const navLinks = document.querySelector(".nav__links");
const headerInput = document.querySelector(".header__input");
const headerButton = document.querySelector(".header__button");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  headerInput.classList.toggle("open");
  headerButton.classList.toggle("open");
});
