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

// The user could be on a small screen with the nav open (therefore, no-scroll is active).
// Then, they resize their browser so that they are on a large screen. In these situations, we must
// disable no-scroll.
const supportsQuery = Boolean(window.matchMedia);
const query = supportsQuery ? window.matchMedia('(min-width: 551px)') : null;
if (query && typeof query.addListener === 'function') {
  query.addListener((event) => {
    if (event.matches && window.noScroll) {
      window.noScroll.off();
    }
  });
}

/* Persist scroll position of nav */
var navTop = sessionStorage.getItem('nav-scroll');
if (navTop !== null) {
  nav.scrollTop = parseInt(navTop, 10);
}

window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('nav-scroll', nav.scrollTop);
});
