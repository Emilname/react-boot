document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const body = document.body;
  let mobileMenuOpen = false;
  menuButton.addEventListener("click", () => {
    if (mobileMenuOpen) {
      menuButton.classList.remove("menu_open");
      mobileMenu.classList.remove("visible");
      body.classList.remove("fixed");
    } else {
      menuButton.classList.add("menu_open");
      mobileMenu.classList.add("visible");
      body.classList.add("fixed");
    }

    mobileMenuOpen = !mobileMenuOpen;
  });
});
