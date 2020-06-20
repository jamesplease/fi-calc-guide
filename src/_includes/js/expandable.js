window.Expandable = function Expandable({
  el = '',
  isOpen = false,
  onTransitionStart,
  onTransitionEnd,
}) {
  this.el = el;
  this.toggle = el.querySelector('.nav_sectionLinkToggle');
  this.expandableChild = el.querySelector('.expandable_child');
  this.isOpen = isOpen;
  this.onTransitionStart = onTransitionStart;
  this.onTransitionEnd = onTransitionEnd;

  if (this.toggle) {
    this.toggle.addEventListener('click', () => {
      if (!this.isOpening) {
        this.toggleOpen(!this.isOpen);
      }
    });

    if (this.isOpen) {
      this.el.classList.add('expandable-expanded');
      if (typeof this.onTransitionStart === 'function') {
        this.onTransitionStart('open');
      }
    }
  }
};

Expandable.prototype.toggleOpen = function (newIsOpen) {
  this.isOpening = true;
  const snapshot = this.expandableChild.getBoundingClientRect();

  const classNameToAdd = newIsOpen
    ? 'expandable-expanded'
    : 'expandable-collapsed';
  const classNameToRemove = !newIsOpen
    ? 'expandable-expanded'
    : 'expandable-collapsed';

  this.el.classList.remove(classNameToRemove);
  this.el.classList.add(classNameToAdd);

  const durationMs = 200;

  if (typeof this.onTransitionStart === 'function') {
    this.onTransitionStart(newIsOpen ? 'open' : 'close');
  }

  const bb = this.expandableChild.getBoundingClientRect();
  this.expandableChild.style.height = `${snapshot.height}px`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      this.expandableChild.style.transition = `all ${durationMs}ms ease-out`;
      this.expandableChild.style.height = `${bb.height}px`;

      setTimeout(() => {
        this.expandableChild.style = '';
        this.isOpen = newIsOpen;
        this.isOpening = false;

        if (typeof this.onTransitionEnd === 'function') {
          this.onTransitionEnd(newIsOpen ? 'open' : 'close');
        }
      }, durationMs);
    });
  });
};
