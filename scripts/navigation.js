// Navigation menu toggle for small screens
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-menu");
  const primaryNav = document.getElementById("primary-nav");

  if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener("click", () => {
      primaryNav.classList.toggle("open");
      hamburgerBtn.classList.toggle("open");
    });
  }
});