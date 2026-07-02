const burgerBtn = document.querySelector(".header__burger");
const menuNav = document.querySelector(".header__nav");

if (burgerBtn && menuNav) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("header__burger--active");
    menuNav.classList.toggle("header__nav--open");
  });
}
