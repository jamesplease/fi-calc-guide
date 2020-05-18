const isLightMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
const bodyClass = isLightMode ? "lightMode" : "darkMode";
document.body.classList.add(bodyClass);
