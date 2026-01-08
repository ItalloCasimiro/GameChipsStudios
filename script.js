const header = document.querySelector("header");
const navList = document.querySelector("#PageIndex > ul");
const langList = document.querySelector("#LanguageIndex > ul");

var Year = new Date().getFullYear();
document.getElementById("CurrentYear").textContent = String(Year);

function toggleMenu() {
  navList.classList.toggle("active");
  langList.classList.remove("active");
}

function languageMenu() {
  langList.classList.toggle("active");
  navList.classList.remove("active");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.position = "sticky";
    header.style.zIndex = "1000";
    header.style.backgroundColor = "black";
    header.style.outlineStyle = "solid";
    header.style.outlineColor = "white";
  } else {
    header.style.position = "static";
    header.style.outlineStyle = "none";
    header.style.backgroundColor = "transparent";
  }
});
