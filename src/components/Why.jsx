import { useEffect, useRef } from 'react';
import benefit1Img from '../assets/images/benefit-1.jpg';
import benefit2Img from '../assets/images/benefit-2.jpg';
import benefit3Img from '../assets/images/benefit-3.jpg';
import benefit4Img from '../assets/images/benefit-4.jpg';
import benefit5Img from '../assets/images/benefit-5.jpg';

const CARDS = [
  { img: benefit2Img, tag: 'Privacy', t: 'Nothing is logged', d: 'Browsing, traffic, DNS lookups and connection times are never stored.', href: '#faq' },
  { img: benefit1Img, tag: 'Streaming', t: 'Smooth streaming', d: 'Servers tuned for video keep your shows playing without the buffering.', href: '#servers' },
  { img: benefit3Img, tag: 'Independence', t: 'Locally owned', d: 'Our own team runs every server, with no foreign parent company behind it.', href: '#about' },
  { img: benefit4Img, tag: 'Access', t: 'Your content, anywhere', d: (<>Reach the apps and sites you love from <span data-fact="countries">90</span>+ countries.</>), href: '#servers' },
  { img: benefit5Img, tag: 'Speed', t: 'Auto switching', d: 'If a server gets busy, the app moves you to a faster one on its own.', href: '#tech' },
];

export default function Why() {
  const rail = useRef(null);
  const sec = useRef(null);
  const pin = useRef(null);
  const bar = useRef(null);
  const pinned = useRef(false);

  /* Scroll trigger: on wide screens with motion allowed, the section pins to
     the viewport and the vertical scroll drives the rail sideways. The page
     only moves on once the last card is in view. One pixel down = one pixel
     across, so the section is exactly as much taller as the rail overflows.
     Narrow screens and reduced motion keep the plain swipeable rail. */
  useEffect(() => {
    const s = sec.current, p = pin.current, r = rail.current;
    if (!s || !p || !r) return undefined;
    const mq = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
    let dist = 0, raf = 0;

    const update = () => {
      raf = 0;
      if (!pinned.current) return;
      const travel = s.offsetHeight - p.offsetHeight;
      const t = travel > 0 ? Math.min(1, Math.max(0, -s.getBoundingClientRect().top / travel)) : 0;
      r.style.transform = `translate3d(${-t * dist}px,0,0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${t})`;
      /* coverflow: the card nearest the middle of the screen is full size and
         upright; the further out, the smaller and the more it turns away */
      const mid = window.innerWidth / 2;
      r.querySelectorAll('.b-svc').forEach((card) => {
        const b = card.getBoundingClientRect();
        const d = Math.max(-1, Math.min(1, (b.left + b.width / 2 - mid) / (window.innerWidth * 0.6)));
        card.style.scale = (1 - Math.abs(d) * 0.12).toFixed(3);
        card.style.rotate = `y ${(-d * 14).toFixed(2)}deg`;
        card.style.opacity = (1 - Math.abs(d) * 0.25).toFixed(3);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const setup = () => {
      pinned.current = mq.matches;
      s.classList.toggle('is-pinned', pinned.current);
      if (!pinned.current) {
        s.style.height = '';
        r.style.transform = '';
        r.scrollLeft = 0;
        r.querySelectorAll('.b-svc').forEach((card) => { card.style.scale = ''; card.style.rotate = ''; card.style.opacity = ''; });
        return;
      }
      r.style.transform = '';
      dist = Math.max(0, r.scrollWidth - r.clientWidth);
      s.style.height = `${p.offsetHeight + dist}px`;
      update();
    };

    setup();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setup);
    mq.addEventListener('change', setup);
    /* card photos change the rail width as they load */
    r.querySelectorAll('img').forEach((img) => { if (!img.complete) img.addEventListener('load', setup, { once: true }); });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setup);
      mq.removeEventListener('change', setup);
      cancelAnimationFrame(raf);
    };
  }, []);

  const nudge = (dir) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector('.b-svc');
    const step = dir * (card ? card.offsetWidth + 16 : 300);
    /* pinned: the rail follows the page scroll, so the arrows scroll the page */
    if (pinned.current) window.scrollBy({ top: step, behavior: 'smooth' });
    else el.scrollBy({ left: step, behavior: 'smooth' });
  };

  return (
    <section className="b-sec b-why" id="why" ref={sec}>
      <div className="b-why-pin" ref={pin}>
      <div className="wrap b-head">
        <div>
          <p className="b-kicker">Why RusnetVPN</p>
          <h2>Safer and more private than the rest</h2>
        </div>
        <div className="b-head-side">
          <p>Other VPNs keep logs, rent their servers or answer to a company abroad. We do none of that.</p>
          <div className="b-arrows">
            <button type="button" aria-label="Previous" onClick={() => nudge(-1)}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5" /></svg>
            </button>
            <button type="button" aria-label="Next" className="on" onClick={() => nudge(1)}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="b-rail" ref={rail}>
        {CARDS.map((c) => (
          <article className="b-svc" key={c.t}>
            <img src={c.img} alt="" />
            <span className="b-svc-tag">{c.tag}</span>
            <div className="b-svc-body">
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <a href={c.href} className="b-pill">
                Learn more
                <span className="b-btn-ic" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M6 4h6v6" /></svg>
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="wrap b-why-prog" aria-hidden="true"><i ref={bar} /></div>
      </div>
    </section>
  );
}
