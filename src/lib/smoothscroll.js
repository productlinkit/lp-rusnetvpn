// Smooth wheel scrolling, the same idea as Lenis without the dependency.
//
// The mouse wheel moves the page in hard steps of ~100px, and every
// scroll-linked animation on the page (the Why rail, the scroll story in
// 50-blue-accents.css) follows the scroll position, so they stepped too.
// Here the wheel only moves a target; each frame the real scroll position
// eases a fraction of the way towards it, frame-rate independent. The
// animations then glide because the scroll itself glides.
//
// Kept native, on purpose: touch, keyboard, the scrollbar, anchor jumps,
// anything inside its own scroll box (dialogs, lists), pinch/ctrl-zoom, and
// everyone with reduced motion or without a fine pointer.

const EASE = 9;          // higher = snappier. ~9 settles a wheel step in ~0.4s
const STOP = 0.4;        // px: close enough, snap and rest

let started = false;

export function initSmoothScroll() {
  if (started) return;
  started = true;

  const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!motionOk.matches || !finePointer.matches) return;

  let target = window.scrollY;
  let current = window.scrollY;
  let raf = 0;
  let last = 0;
  let selfScroll = false;

  const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
  const locked = () => {
    const h = getComputedStyle(document.documentElement).overflowY;
    const b = getComputedStyle(document.body).overflowY;
    return h === 'hidden' || b === 'hidden';
  };

  // does something between the pointer and the page want this wheel itself?
  const ownScroller = (el, dy) => {
    for (; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
      if (el.closest && el.closest('[role="dialog"], dialog, [aria-modal="true"]')) return true;
      const s = getComputedStyle(el);
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 1) {
        if ((dy < 0 && el.scrollTop > 0) || (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1)) return true;
      }
    }
    return false;
  };

  const frame = (now) => {
    const dt = Math.min(0.05, (now - (last || now)) / 1000) || 1 / 60;
    last = now;
    current += (target - current) * (1 - Math.exp(-EASE * dt));
    if (Math.abs(target - current) < STOP) current = target;
    selfScroll = true;
    window.scrollTo({ top: current, behavior: 'instant' });
    if (current !== target) raf = requestAnimationFrame(frame);
    else { raf = 0; last = 0; }
  };

  window.addEventListener('wheel', (e) => {
    if (e.defaultPrevented || e.ctrlKey || locked()) return;
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16;
    else if (e.deltaMode === 2) dy *= window.innerHeight;
    if (Math.abs(e.deltaX) > Math.abs(dy)) return;      // sideways: leave it to the rail
    if (ownScroller(e.target, dy)) return;
    e.preventDefault();
    if (!raf) { current = window.scrollY; target = current; }
    target = Math.max(0, Math.min(maxScroll(), target + dy));
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: false });

  // anything else that scrolls the page (keys, scrollbar, anchor links)
  // becomes the new resting point instead of being pulled back
  window.addEventListener('scroll', () => {
    if (selfScroll) { selfScroll = false; return; }
    if (raf) { cancelAnimationFrame(raf); raf = 0; last = 0; }
    current = target = window.scrollY;
  }, { passive: true });

  window.addEventListener('resize', () => { target = Math.min(target, maxScroll()); }, { passive: true });
}
