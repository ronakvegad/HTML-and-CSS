const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");

function setMenu(open) {
  header.classList.toggle("nav-open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "✕" : "☰";
}

menuBtn.addEventListener("click", function () {
  setMenu(!header.classList.contains("nav-open"));
});

// close the menu after tapping a link
document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});
