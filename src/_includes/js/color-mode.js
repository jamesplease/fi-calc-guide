const isLightMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;
const bodyClass = isLightMode ? 'lightMode' : 'darkMode';
document.body.classList.add(bodyClass);

const logo = document.querySelector('.home_titleImg');
if (logo && isLightMode) {
  logo.src = '/fi-calc-logo-light.png';
}
