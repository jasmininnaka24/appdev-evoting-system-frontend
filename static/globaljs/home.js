// sign in & sign up
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const signInfunc = document.querySelector(".signIn-func");
const signUpfunc = document.querySelector(".signUp-func");
const modalBtnSignIn = document.querySelector(".modal-btn-sign-in");
const modalBtnSignUp = document.querySelector(".modal-btn-sign-up");
const btnLight = document.querySelector(".btn-greenn");
const btnGreen = document.querySelector(".btn-lightt");

signInBtn.addEventListener("click", () => {
  signInfunc.classList.remove("hidden");
  signUpfunc.classList.add("hidden");
});

signUpBtn.addEventListener("click", () => {
  signInfunc.classList.add("hidden");
  signUpfunc.classList.remove("hidden");
});

// modal

const btnShow1 = document.querySelector(".show-modal-1");
const btnShow2 = document.querySelector(".show-modal-2");
const btnClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// functionality
const insideSignIn = () => {
  signInBtn.style.background = "rgb(90, 108, 100)";
  signInBtn.style.color = "#fff";
  signUpBtn.style.background = "rgb(211, 213, 212)";
  signUpBtn.style.color = "#333";
};

const insideSignUp = () => {
  signUpBtn.style.background = "rgb(90, 108, 100)";
  signUpBtn.style.color = "#fff";
  signInBtn.style.background = "rgb(211, 213, 212)";
  signInBtn.style.color = "#333";
};

const showModalSignIn = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  signInfunc.classList.remove("hidden");
  signUpfunc.classList.add("hidden");
  insideSignIn();
};
const showModalSignUp = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  signInfunc.classList.add("hidden");
  signUpfunc.classList.remove("hidden");
  insideSignUp();
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShow1.addEventListener("click", showModalSignIn);
btnShow2.addEventListener("click", showModalSignUp);
signInBtn.addEventListener("click", insideSignIn);
signUpBtn.addEventListener("click", insideSignUp);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// escape

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
