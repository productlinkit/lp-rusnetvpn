// Scroll motion for the landing page. CSS does the drawing; this only adds
// classes: .fx-rise on each item and .in once it comes into view, with --i as
// its place among its siblings so a row of cards arrives one after another.
// Nothing is written per scroll frame, so scrolling stays smooth. The
// scroll-linked drift on photos is pure CSS (animation-timeline) and runs off
// the main thread. Under prefers-reduced-motion everything is simply shown.

let started = false;

const GROUPS = [
  '.b-reveal',
  '.b-head',
  '.b-hero .stats .st',
  '.b-svc',
  '#servers .rowi',
  '#pricing .seg button',
  '#pricing .pcard',
  '#pricing .trial',
  '.b-vs-row:not(.top)',
  '#apps .store',
  '#faq .qrow',
  '.sec-cta .cta',
  'footer .fgrid > *',
];

export function initScrollFx() {
  if (started) return;
  started = true;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const items = new Set();
  GROUPS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => items.add(el));
  });
  items.forEach((el) => {
    const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => items.has(c)) : [el];
    el.classList.add('fx-rise');
    el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
  });
  initTilt(reduce);
  if (reduce.matches || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  items.forEach((el) => io.observe(el));
}

// Cards lean toward the pointer and catch a soft light where it is. One rAF
// per frame at most, and only for the card under the pointer.
const TILT = '.b-tile, .b-step, #pricing .pcard, #pricing .trial, .b-hero .stats .st';
const MAX_TILT = 5;

function initTilt(reduce) {
  if (reduce.matches || !window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll(TILT).forEach((el) => el.classList.add('fx-tilt'));
  let active = null, frame = 0, px = 0, py = 0;
  const paint = () => {
    frame = 0;
    if (!active) return;
    const r = active.getBoundingClientRect();
    const x = (px - r.left) / r.width, y = (py - r.top) / r.height;
    active.style.setProperty('--ry', `${(x - 0.5) * MAX_TILT * 2}deg`);
    active.style.setProperty('--rx', `${(0.5 - y) * MAX_TILT * 2}deg`);
    active.style.setProperty('--mx', `${x * 100}%`);
    active.style.setProperty('--my', `${y * 100}%`);
  };
  const release = (el) => {
    el.classList.remove('is-tilting');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
  document.addEventListener('pointermove', (e) => {
    const el = e.pointerType === 'mouse' ? e.target.closest('.fx-tilt') : null;
    if (el !== active) {
      if (active) release(active);
      active = el;
      if (el) el.classList.add('is-tilting');
    }
    px = e.clientX; py = e.clientY;
    if (active && !frame) frame = requestAnimationFrame(paint);
  }, { passive: true });
  document.addEventListener('pointerleave', () => { if (active) { release(active); active = null; } });
}
