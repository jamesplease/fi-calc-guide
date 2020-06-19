var nav = document.querySelector('.nav');

/* Open/close nav on small screens */
var navOpenBtn = document.querySelector('.header_open');
var navBg = document.querySelector('.nav_bg');
var navIsOpen = false;

navOpenBtn.addEventListener('click', function () {
  nav.classList.add('nav_open');

  if (window.noScroll) {
    window.noScroll.on();
  }
});

navBg.addEventListener('click', function () {
  nav.classList.remove('nav_open');

  if (window.noScroll) {
    window.noScroll.off();
  }
});

/* Persist scroll position of nav */
var navTop = sessionStorage.getItem('nav-scroll');
if (navTop !== null) {
  nav.scrollTop = parseInt(navTop, 10);
}

window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('nav-scroll', nav.scrollTop);
});
