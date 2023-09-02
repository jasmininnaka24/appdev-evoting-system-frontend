const btnSave = document.getElementById("btn-profile-save");
const usernameInp = document.getElementById("username");
const useridInp = document.getElementById("userid");
const userinfoInp = document.getElementById("userinfo");
const useremailInp = document.getElementById("useremail");
const successful = document.getElementById("successful");

btnSave.addEventListener("click", () => {
  if (
    usernameInp.value === "" ||
    useridInp.value === "" ||
    userinfoInp.value === ""
  ) {
    alert("Please fill out all the following fields.");
  } else {
    setTimeout(() => {
      btnSave.textContent = "SAVING...";
    }, 0000);
    setTimeout(() => {
      btnSave.textContent = "SAVED";
      btnSave.disabled = "disabled";
    }, 2000);
    setTimeout(() => {
      usernameInp.setAttribute("readonly", "");
      useridInp.setAttribute("readonly", "");
      userinfoInp.setAttribute("readonly", "");
      userinfoInp.setAttribute("readonly", "");
      successful.classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
      alert("You can now click the logo to get directed to the main page.");
    }, 4000);
  }
});
