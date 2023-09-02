const menuToggle = document.querySelector(".close-modal");
const navbar = document.querySelector(".navbar");
const menubtn = document.getElementById("menu-btn");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
menubtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
