var nav = document.querySelector('.nav');

/* Open/close nav on small screens */
var navOpenBtn = document.querySelector('.header_open');
var navBg = document.querySelector('.nav_bg');
var navIsOpen = false;

function enableScroll() {
  if (window.bodyScrollLock && window.bodyScrollLock.enableBodyScroll) {
    bodyScrollLock.enableBodyScroll(nav);
  }
}

function disableScroll() {
  if (window.bodyScrollLock && window.bodyScrollLock.disableBodyScroll) {
    bodyScrollLock.disableBodyScroll(nav);
  }
}

navOpenBtn.addEventListener('click', function () {
  nav.classList.add('nav_open');

  disableScroll();
});

navBg.addEventListener('click', function () {
  nav.classList.remove('nav_open');

  enableScroll();
});

// The user could be on a small screen with the nav open (therefore, no-scroll is active).
// Then, they resize their browser so that they are on a large screen. In these situations, we must
// disable no-scroll.
var supportsQuery = Boolean(window.matchMedia);
var query = supportsQuery ? window.matchMedia('(min-width: 551px)') : null;
if (query && typeof query.addListener === 'function') {
  query.addListener(function (event) {
    enableScroll();
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
