var firstIndex = 0;

function automaticSlide() {
  setTimeout(automaticSlide, 5000);

  var slide;
  const box = document.querySelectorAll(".small-box");
  for (slide = 0; slide < box.length; slide++) {
    box[slide].style.display = "none";
  }
  firstIndex++;
  if (firstIndex >= box.length) {
    firstIndex = 0;
  }
  box[firstIndex].style.display = "flex";
}

automaticSlide();

document.getElementById("nav-toggle").addEventListener("click", function () {
  var overlayMenu = document.getElementById("overlay-menu");
  overlayMenu.classList.toggle("hidden");
});

document.getElementById("close-overlay").addEventListener("click", function () {
  var overlayMenu = document.getElementById("overlay-menu");
  overlayMenu.classList.add("hidden");
});

let home = document.querySelector(".design");
let about = document.querySelector(".devops");
let contact = document.querySelector(".cyber");

let hometext = document.querySelector("#design");
let abouttext = document.querySelector("#devops");
let contacttext = document.querySelector("#cyber");

hometext.style.display = "flex";
hometext.style.width = "100%";

home.addEventListener("click", function () {
  removeText();
  hometext.style.display = "flex";
  hometext.style.width = "100%";
});

about.addEventListener("click", function () {
  removeText();
  abouttext.style.display = "flex";
  abouttext.style.width = "100%";
});

contact.addEventListener("click", function () {
  removeText();
  contacttext.style.display = "flex";
  contacttext.style.width = "100%";
});

function removeText() {
  document.querySelectorAll(".change").forEach(function (change) {
    change.style.display = "none";
  });
}

document.querySelectorAll(".group").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".border-b-4").forEach((border) => {
      border.classList.add("border-transparent");
      border.classList.remove("border-blue-300");
    });

    item.querySelector(".border-b-4").classList.remove("border-transparent");
    item.querySelector(".border-b-4").classList.add("border-black");
  });
});
