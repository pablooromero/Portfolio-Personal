const toggle = document.getElementById("toggle");
const btn = document.getElementById("btn");
const links = document.querySelectorAll(".links");

btn.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
});
links.forEach((e) => {
  e.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});
