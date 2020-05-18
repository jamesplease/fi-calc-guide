var isLightMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
var bodyClass = isLightMode ? "lightMode" : "darkMode";
document.body.classList.add(bodyClass);
