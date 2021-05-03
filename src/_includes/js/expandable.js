window.Expandable = function Expandable({
  el = '',
  isOpen = false,
  onTransitionStart,
  onTransitionEnd,
}) {
  this.isRendering = isOpen;
  this.el = el;
  this.toggle = el.querySelector('.nav_sectionLinkToggle');
  this.expandableChild = el.querySelector('.expandable_child');

  if (!this.isRendering && this.expandableChild.isConnected) {
    this.expandableChild.remove();
  }

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

  const durationMs = 200;

  if (typeof this.onTransitionStart === 'function') {
    this.onTransitionStart(newIsOpen ? 'open' : 'close');
  }

  let useRaf = false;
  if (newIsOpen && !this.expandableChild.isConnected) {
    useRaf = true;
    this.el.appendChild(this.expandableChild);
  }

  const performAnimation = () => {
    this.el.classList.remove(classNameToRemove);
    this.el.classList.add(classNameToAdd);

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

          if (!newIsOpen) {
            if (this.expandableChild.isConnected) {
              this.expandableChild.remove();
            }
          }

          if (typeof this.onTransitionEnd === 'function') {
            this.onTransitionEnd(newIsOpen ? 'open' : 'close');
          }
        }, durationMs);
      });
    });
  };

  if (useRaf) {
    setTimeout(() => {
      performAnimation();
    }, 24);
  } else {
    performAnimation();
  }
};
