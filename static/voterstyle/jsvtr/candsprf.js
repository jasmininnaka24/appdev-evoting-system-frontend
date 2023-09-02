const menuToggle = document.querySelector(".close-modal");
const navbar = document.querySelector(".navbar");
const menubtn = document.getElementById("menu-btn");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
menubtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

let openModal = (e) => {
  e.parentElement.nextElementSibling.classList.remove("hidden");
};
let closeModal = (e) => {
  e.parentElement.classList.add("hidden");
};
