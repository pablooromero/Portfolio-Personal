const d = document;

//ESCONDER Y MOSTRAR MENÚ
const $navMenu = d.getElementById("nav-menu"),
  $navToggle = d.getElementById("nav-toggle"),
  $navClose = d.getElementById("nav-close");

//MOSTRAR MENÚ
if ($navToggle) {
  $navToggle.addEventListener("click", () => {
    $navMenu.classList.add("show-menu");
  });
}
//ESCONDER MENÚ
if ($navClose) {
  $navClose.addEventListener("click", () => {
    $navMenu.classList.remove("show-menu");
  });
}

//REMOVER MENÚ MOVIL
const $navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const $navMenu = document.getElementById("nav-menu");
  $navMenu.classList.remove("show-menu");
}
$navLink.forEach((n) => n.addEventListener("click", linkAction));

//ESTUDIOS
const $tabs = d.querySelectorAll("[data-target]"),
  $tabContents = d.querySelectorAll("[data-content]");

$tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const $target = d.querySelector(tab.dataset.target);

    $tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    $target.classList.add("qualification__active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

//SWIPER
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//ACTUVE LINK
const sections = d.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      d.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add(
        "active-link"
      );
    } else {
      d.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove(
        "active-link"
      );
    }
  });
}
window.addEventListener("scroll", scrollActive);

//CAMBIAR EL FONDO DEL HEADER
function scrollHeader() {
  const nav = d.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//SCROLL UP
function scrollUp() {
  const scrollUp = d.getElementById("scroll-up");

  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// DARK THEME
const themeButton = d.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  d.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  d.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activar/Desactivar dark theme manualmente
themeButton.addEventListener("click", () => {
  d.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
