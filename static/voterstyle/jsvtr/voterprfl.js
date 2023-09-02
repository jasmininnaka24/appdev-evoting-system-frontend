const btnEdit = document.getElementById("btn-profile-edit");
const btnSave = document.getElementById("btn-profile-save");
const username = document.getElementById("username");
const userid = document.getElementById("userid");
const userinfo = document.getElementById("userinfo");

btnEdit.addEventListener("click", () => {
  username.removeAttribute("readonly");
  userid.removeAttribute("readonly");
  userinfo.removeAttribute("readonly");
  btnSave.classList.toggle("hidden");
  btnEdit.classList.toggle("hidden");
});

btnSave.addEventListener("click", () => {
  username.setAttribute("readonly", "");
  userid.setAttribute("readonly", "");
  userinfo.setAttribute("readonly", "");
  btnEdit.classList.toggle("hidden");
  btnSave.classList.toggle("hidden");
});
