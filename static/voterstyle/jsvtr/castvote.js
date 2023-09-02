const mayor = document.getElementById("mayor");
const vmayor = document.getElementById("vmayor");
const senator = document.getElementById("senator");
const councilors = document.getElementById("councilors");
const mayorcands = document.getElementById("mayorcands");
const vmayorcands = document.getElementById("vmayorcands");
const senatorcands = document.getElementById("senatorcands");
const councilorscands = document.getElementById("councilorscands");

const red = document.querySelector(".red");
const green = document.querySelector(".green");
let selectingMayor = document.querySelectorAll(".selectingMayor section");
let selectingVMayor = document.querySelectorAll(".selectingVMayor section");
let selectingSenator = document.querySelectorAll(".selectingSenator section");
let selectingCouncilors = document.querySelectorAll(
  ".selectingCouncilors section"
);

mayor.addEventListener("click", () => {
  mayor.firstElementChild.classList.add("green");
  mayor.firstElementChild.classList.remove("red");
  vmayor.firstElementChild.classList.remove("green");
  vmayor.firstElementChild.classList.add("red");
  senator.firstElementChild.classList.remove("green");
  senator.firstElementChild.classList.add("red");
  councilors.firstElementChild.classList.remove("green");
  councilors.firstElementChild.classList.add("red");
  mayorcands.classList.remove("hidden");
  vmayorcands.classList.add("hidden");
  senatorcands.classList.add("hidden");
  councilorscands.classList.add("hidden");
});
vmayor.addEventListener("click", () => {
  vmayor.firstElementChild.classList.add("green");
  vmayor.firstElementChild.classList.remove("red");
  mayor.firstElementChild.classList.remove("green");
  mayor.firstElementChild.classList.add("red");
  senator.firstElementChild.classList.remove("green");
  senator.firstElementChild.classList.add("red");
  councilors.firstElementChild.classList.remove("green");
  councilors.firstElementChild.classList.add("red");
  mayorcands.classList.add("hidden");
  vmayorcands.classList.remove("hidden");
  senatorcands.classList.add("hidden");
  councilorscands.classList.add("hidden");
});
senator.addEventListener("click", () => {
  senator.firstElementChild.classList.add("green");
  senator.firstElementChild.classList.remove("red");
  mayor.firstElementChild.classList.remove("green");
  mayor.firstElementChild.classList.add("red");
  vmayor.firstElementChild.classList.remove("green");
  vmayor.firstElementChild.classList.add("red");
  councilors.firstElementChild.classList.remove("green");
  councilors.firstElementChild.classList.add("red");
  mayorcands.classList.add("hidden");
  vmayorcands.classList.add("hidden");
  senatorcands.classList.remove("hidden");
  councilorscands.classList.add("hidden");
});
councilors.addEventListener("click", () => {
  councilors.firstElementChild.classList.add("green");
  councilors.firstElementChild.classList.remove("red");
  mayor.firstElementChild.classList.remove("green");
  mayor.firstElementChild.classList.add("red");
  vmayor.firstElementChild.classList.remove("green");
  vmayor.firstElementChild.classList.add("red");
  senator.firstElementChild.classList.remove("green");
  senator.firstElementChild.classList.add("red");
  mayorcands.classList.add("hidden");
  vmayorcands.classList.add("hidden");
  senatorcands.classList.add("hidden");
  councilorscands.classList.remove("hidden");
});

// Selecting Mayor
for (let i = 0; i < selectingMayor.length; i++) {
  const active = selectingMayor[i];
  active.addEventListener("click", function () {
    document
      .querySelectorAll(".selectingMayor section")
      .forEach((selectingMayor) => {
        selectingMayor.classList.remove("voted");
      });
    active.classList.add("voted");
  });
}

// Selecting Vice Mayor
for (let i = 0; i < selectingVMayor.length; i++) {
  const active = selectingVMayor[i];
  active.addEventListener("click", function () {
    document
      .querySelectorAll(".selectingVMayor section")
      .forEach((selectingVMayor) => {
        selectingVMayor.classList.remove("voted");
      });
    active.classList.add("voted");
  });
}

// Selecting Senator
for (let i = 0; i < selectingSenator.length; i++) {
  const active = selectingSenator[i];
  active.addEventListener("click", function () {
    document
      .querySelectorAll(".selectingSenator section")
      .forEach((selectingSenator) => {
        selectingSenator.classList.remove("voted");
      });
    active.classList.add("voted");
  });
}
// Selecting Councilors
for (let i = 0; i < selectingCouncilors.length; i++) {
  const active = selectingCouncilors[i];
  active.addEventListener("click", function () {
    active.classList.toggle("voted");
  });
}

const btnCandsSave = document.getElementById("btn-cands-save");
const btnCandsSaved = document.getElementById("btn-cands-saved");
const sure = document.getElementById("sure");
const overlayy = document.querySelector(".overlay");

btnCandsSave.addEventListener("click", () => {
  sure.classList.remove("hidden");
  overlayy.classList.remove("hidden");
  let yes = sure.lastElementChild.firstElementChild;
  let no = sure.lastElementChild.lastElementChild;

  yes.addEventListener("click", () => {
    sure.classList.add("hidden");
    overlayy.classList.add("hidden");
    btnCandsSave.classList.add("hidden");
    btnCandsSaved.classList.remove("hidden");
  });
  no.addEventListener("click", () => {
    sure.classList.add("hidden");
    overlayy.classList.add("hidden");
  });
});
