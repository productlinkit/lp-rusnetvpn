// Scroll motion for the landing page. CSS does the drawing; this only adds
// classes: .fx-rise on staggered items and .in once they come into view, with
// --i as their index. Nothing is written per scroll frame, so scrolling stays
// smooth. Under prefers-reduced-motion everything is simply shown.

let started = false;

export function initScrollFx() {
  if (started) return;
  started = true;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const groups = ['.b-reveal'];
  const items = [];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fx-rise');
      el.style.setProperty('--i', i % 8);
      items.push(el);
    });
  });
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
