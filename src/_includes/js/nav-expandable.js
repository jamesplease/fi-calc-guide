const els = document.querySelectorAll('.nav_section');

const storedStates = sessionStorage.getItem('navStates');

const DEFAULT_OPEN_STATE = {
  0: true,
  1: true,
};

let openObject = DEFAULT_OPEN_STATE;

try {
  openObject = JSON.parse(storedStates) || DEFAULT_OPEN_STATE;
} catch {
  sessionStorage.setItem('navStates', JSON.stringify(DEFAULT_OPEN_STATE));
}

if (Expandable) {
  els.forEach((el, index) => {
    const isOpen = openObject[index] === true;

    const classToAdd = isOpen ? 'expandable-expanded' : 'expandable-collapsed';

    // `expandable-initial` can be used to disable mount animations.
    el.classList.add(classToAdd, 'expandable-initial');

    // We give the browser a couple of frames, then remove the initial class name.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.remove('expandable-initial');
      });
    });

    new Expandable({
      el,
      isOpen,
      onTransitionEnd(type) {
        // Every time a transition ends, we update our session storage with the
        // latest state. This is unlikely to be 100% foolproof (a user could theoretically)
        // navigate before the transition ends, but it should be good enough for the overwhelming
        // majority of cases.
        const newState = type === 'open' ? true : false;
        openObject[index] = newState;
        sessionStorage.setItem('navStates', JSON.stringify(openObject));
      },
    });
  });
}
