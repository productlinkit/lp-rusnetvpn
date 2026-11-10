import { useRef } from 'react';
import benefit1Img from '../assets/images/benefit-1.jpg';
import benefit2Img from '../assets/images/benefit-2.jpg';
import benefit3Img from '../assets/images/benefit-3.jpg';
import benefit4Img from '../assets/images/benefit-4.jpg';
import appShot2Img from '../assets/images/app-shot-2.jpg';

const CARDS = [
  { img: benefit2Img, tag: 'Privacy', t: 'Nothing is logged', d: 'Browsing, traffic, DNS lookups and connection times are never stored.', href: '#faq' },
  { img: benefit1Img, tag: 'Streaming', t: 'Smooth streaming', d: 'Servers tuned for video keep your shows playing without the buffering.', href: '#servers' },
  { img: benefit3Img, tag: 'Independence', t: 'Locally owned', d: 'Our own team runs every server, with no foreign parent company behind it.', href: '#about' },
  { img: benefit4Img, tag: 'Access', t: 'Your content, anywhere', d: (<>Reach the apps and sites you love from <span data-fact="countries">90</span>+ countries.</>), href: '#servers' },
  { img: appShot2Img, tag: 'Speed', t: 'Auto switching', d: 'If a server gets busy, the app moves you to a faster one on its own.', href: '#tech' },
];

export default function Why() {
  const rail = useRef(null);
  const nudge = (dir) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector('.b-svc');
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 16 : 300), behavior: 'smooth' });
  };

  return (
    <section className="b-sec b-why" id="why">
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
    </section>
  );
}
