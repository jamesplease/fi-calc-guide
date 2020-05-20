var nav = document.querySelector('.nav');
var navTop = sessionStorage.getItem('nav-scroll');
if (navTop !== null) {
  nav.scrollTop = parseInt(navTop, 10);
}

window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('nav-scroll', nav.scrollTop);
});
