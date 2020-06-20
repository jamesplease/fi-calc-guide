const nav = document.querySelector('.nav');

/* Open/close nav on small screens */
const navOpenBtn = document.querySelector('.header_open');
const navBg = document.querySelector('.nav_bg');
const navIsOpen = false;

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

navOpenBtn.addEventListener('click', () => {
  nav.classList.add('nav_open');

  disableScroll();
});

navBg.addEventListener('click', () => {
  nav.classList.remove('nav_open');

  enableScroll();
});

// The user could be on a small screen with the nav open (therefore, no-scroll is active).
// Then, they resize their browser so that they are on a large screen. In these situations, we must
// disable no-scroll.
const supportsQuery = Boolean(window.matchMedia);
const query = supportsQuery ? window.matchMedia('(min-width: 551px)') : null;
if (query && typeof query.addListener === 'function') {
  query.addListener((event) => {
    enableScroll();
  });
}

/* Persist scroll position of nav */
const navTop = sessionStorage.getItem('nav-scroll');
if (navTop !== null) {
  nav.scrollTop = parseInt(navTop, 10);
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('nav-scroll', nav.scrollTop);
});
