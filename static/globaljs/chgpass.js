const btnEdit = document.getElementById("btn-profile-edit");
const btnSave = document.getElementById("btn-profile-save");
const currentpass = document.getElementById("currentpass");
const newpass = document.getElementById("newpass");
const confirmpass = document.getElementById("confirmpass");

btnEdit.addEventListener("click", () => {
  currentpass.removeAttribute("readonly");
  newpass.removeAttribute("readonly");
  confirmpass.removeAttribute("readonly");
  btnSave.classList.toggle("hidden");
  btnEdit.classList.toggle("hidden");
});

btnSave.addEventListener("click", () => {
  currentpass.setAttribute("readonly", "");
  newpass.setAttribute("readonly", "");
  confirmpass.setAttribute("readonly", "");
  btnEdit.classList.toggle("hidden");
  btnSave.classList.toggle("hidden");
});
