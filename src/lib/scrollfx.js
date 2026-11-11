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
