// Scroll motion for the landing page. CSS does the drawing; this only adds
// classes: .fx-rise on staggered items and .in once they come into view, with
// --i as their index. Nothing is written per scroll frame, so scrolling stays
// smooth. Under prefers-reduced-motion everything is simply shown.

let started = false;

export function initScrollFx() {
  if (started) return;
  started = true;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const groups = ['.stats .st', '.how-step', '.rowi', '.price-grid > *', '.qrow', '.fgrid > *', '.applist li', '.store'];
  const items = [];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fx-rise');
      el.style.setProperty('--i', i % 8);
      items.push(el);
    });
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
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
}

// Cards lean a little toward the pointer and catch a highlight where it is.
// One listener for the page; only the card under the pointer is restyled.
const TILT = '.ft-card, .rowi, .pcard, .trial, .vs-table, .store, .show-frame';

function initTilt(reduce) {
  if (reduce.matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll(TILT).forEach((el) => el.classList.add('tilt'));
  let hot = null, raf = 0, ev = null;
  const paint = () => {
    raf = 0;
    if (!hot || !ev) return;
    const r = hot.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
    const k = r.width > 500 ? 3 : 7;
    hot.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
    hot.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    hot.style.setProperty('--tx', `${((0.5 - y) * k).toFixed(2)}deg`);
    hot.style.setProperty('--ty', `${((x - 0.5) * k).toFixed(2)}deg`);
  };
  const cool = (el) => {
    el.classList.remove('is-hot');
    el.style.setProperty('--tx', '0deg');
    el.style.setProperty('--ty', '0deg');
  };
  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest && e.target.closest('.tilt');
    if (el !== hot) { if (hot) cool(hot); hot = el; if (hot) hot.classList.add('is-hot'); }
    ev = e;
    if (hot && !raf) raf = requestAnimationFrame(paint);
  }, { passive: true });
}
