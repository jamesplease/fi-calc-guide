var isLightMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
var bodyClass = isLightMode ? "lightMode" : "darkMode";
document.body.classList.add(bodyClass);

var logo = document.querySelector(".home_titleImg");
if (logo && isLightMode) {
  logo.src = "/fi-calc-logo-light.png";
}
