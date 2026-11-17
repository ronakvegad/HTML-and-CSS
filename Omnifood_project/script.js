const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  const open = header.classList.toggle("nav-open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
    menuBtn.setAttribute("aria-expanded", false);
    menuBtn.textContent = "☰";
  });
});
