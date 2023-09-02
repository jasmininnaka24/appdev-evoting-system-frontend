const btnEdit = document.getElementById("btn-profile-edit");
const btnSave = document.getElementById("btn-profile-save");
const usernameInp = document.getElementById("username");
const useremailInp = document.getElementById("useremail");

btnEdit.addEventListener("click", () => {
  usernameInp.removeAttribute("readonly");
  // useremailInp.setAttribute("readonly", "");
  btnSave.classList.toggle("hidden");
  btnEdit.classList.toggle("hidden");
});

btnSave.addEventListener("click", () => {
  usernameInp.setAttribute("readonly", "");
  // useremailInp.setAttribute("readonly", "");
  btnEdit.classList.toggle("hidden");
  btnSave.classList.toggle("hidden");
});
