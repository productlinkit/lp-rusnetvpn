// Scroll-driven motion for the revamp. CSS does the drawing; this only feeds it
// numbers and classes:
//   --hx on #why             how far the pinned rail has slid sideways
//   .in on staggered items   once they come into view, with --i as their index
// Nothing runs under prefers-reduced-motion; the CSS shows everything at rest.
// Per-frame variables on <html> or on big sections made every scroll frame
// restyle the whole page, so only the pinned rail is fed while scrolling.

let started = false;

export function initScrollFx() {
  if (started) return;
  started = true;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ---------- staggered reveal ----------
  const groups = ['.stats .st', '.tile', '.rowi', '.price-grid > *', '.qrow', '.fgrid > *', '.applist li', '.store'];
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
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  }

  // ---------- continuous progress ----------
  const why = document.getElementById('why');
  const rail = document.getElementById('rail');
  let ticking = false;

  function frame() {
    ticking = false;
    const vh = window.innerHeight;
    if (reduce.matches) return;

    // the Why section is tall; while its sticky inner is pinned, vertical
    // scroll becomes the rail's sideways travel
    if (why && rail && why.classList.contains('is-pinned')) {
      const r = why.getBoundingClientRect();
      const run = why.offsetHeight - vh;
      const t = run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 0;
      const travel = Math.max(0, rail.scrollWidth - rail.parentElement.clientWidth);
      why.style.setProperty('--hx', `${(-travel * t).toFixed(1)}px`);
      why.style.setProperty('--wp', t.toFixed(3));
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  // the pin only makes sense on wide screens with motion allowed; below that the
  // rail is a normal swipeable row
  const wide = window.matchMedia('(min-width: 901px)');
  function setPin() {
    if (!why) return;
    const on = wide.matches && !reduce.matches;
    why.classList.toggle('is-pinned', on);
    if (!on) why.style.removeProperty('--hx');
    frame();
  }
  [wide, reduce].forEach((q) => (q.addEventListener ? q.addEventListener('change', setPin) : q.addListener(setPin)));

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  setPin();
}
