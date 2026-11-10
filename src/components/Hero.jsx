import { useEffect, useRef, useState } from 'react';
import heroImg from '../assets/images/hero.jpg';

// cities the orbit shows; tapping the orb "connects" to the highlighted one
const NODES = [
  { c: 'Frankfurt', ms: 12, x: 30, y: -4 },
  { c: 'Helsinki', ms: 18, x: 86, y: 10 },
  { c: 'Tokyo', ms: 48, x: 94, y: 62 },
  { c: 'Dubai', ms: 31, x: 4, y: 74 },
];

export default function Hero() {
  const stage = useRef(null);
  const [on, setOn] = useState(false);
  const [node, setNode] = useState(0);

  // the stage leans toward the pointer; only the stage is restyled, once per frame
  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let raf = 0, x = 0, y = 0;
    const host = el.closest('.hero');
    const move = (e) => {
      const r = host.getBoundingClientRect();
      x = (e.clientX - r.left) / r.width - 0.5;
      y = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
        host.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
        host.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
      });
    };
    const leave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    return () => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);

  // while disconnected the orbit keeps hopping between cities
  useEffect(() => {
    if (on) return undefined;
    const t = setInterval(() => setNode((n) => (n + 1) % NODES.length), 1800);
    return () => clearInterval(t);
  }, [on]);

  const cur = NODES[node];

  return (
    <>
      <section className="hero wrap hx" aria-label="Hero section">
        <span className="hx-glow" aria-hidden="true" />
        <span className="hx-shape s1" aria-hidden="true" />
        <span className="hx-shape s2" aria-hidden="true" />
        <span className="hx-shape s3" aria-hidden="true" />
        <div className="hx-grid">
          <div className="hx-copy">
            <span className="eyebrow up">
              <i className="dot" />
              <span>
                Safer and more private than the rest
              </span>
            </span>
            <h1 className="up" style={{ "--d": "60ms" }}>
              <span className="hx-w">Your</span>{" "}
              <span className="hx-w">internet,</span>{" "}
              <span className="serif hx-w">on your</span>{" "}
              <span className="serif hx-w">terms.</span>
            </h1>
            <p className="lead up" style={{ "--d": "120ms" }}>
              The safest, most private way to get online. Pick from{" "}
              <span data-fact="servers">
                700
              </span>
              + servers in{" "}
              <span data-fact="countries">
                90
              </span>
              + countries, and nothing you do is ever logged.
            </p>
            <div className="hero-cta up" style={{ "--d": "180ms" }}>
              <a href="#" className="btn btn-red" data-buy="">
                <span>
                  Start your 30-day trial
                </span>
                <span className="arw">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12L12 4M6 4h6v6" />
                  </svg>
                </span>
              </a>
              {" "}
              <a href="#how" className="btn btn-ghost">
                How it works
              </a>
            </div>
            <p className="tiny up" style={{ "--d": "220ms" }}>
              Not happy? Get a full refund within 30 days.
            </p>
          </div>

          <div className="stage hx-stage up" ref={stage} style={{ "--d": "200ms" }}>
            <div className="hx-tilt">
              <span className="hx-back" aria-hidden="true" />
              <figure className="media shot">
                <img src={heroImg} alt="Two people smiling and holding phones with RusnetVPN open" onError={(e) => e.currentTarget.remove()} />
              </figure>

              {/* an orbit of cities around the photo; the orb in the middle is a toy
                  connect button that shows what one tap does */}
              <div className={`hx-orbit${on ? ' is-on' : ''}`} aria-hidden="true">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  {NODES.map((n, i) => (
                    <line key={n.c} x1="50" y1="50" x2={n.x} y2={n.y} className={i === node ? 'on' : ''} />
                  ))}
                </svg>
                {NODES.map((n, i) => (
                  <span key={n.c} className={`hx-node${i === node ? ' on' : ''}`} style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                    <i />
                    <b>{n.c}</b>
                    <em className="mono">{n.ms} ms</em>
                  </span>
                ))}
              </div>
              <button
                type="button"
                className={`hx-orb${on ? ' is-on' : ''}`}
                onClick={() => setOn((v) => !v)}
                aria-pressed={on}
              >
                <span className="hx-ring r1" />
                <span className="hx-ring r2" />
                <span className="hx-core">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 4v7" />
                    <path d="M7.5 6.5a7 7 0 1 0 9 0" />
                  </svg>
                </span>
                <span className="hx-orb-l">
                  {on ? `Protected · ${cur.c}` : 'Tap to connect'}
                </span>
              </button>

              <span className="chip c1">
                <svg className="flagru" viewBox="0 0 21 14" aria-hidden="true" focusable="false">
                  <rect width="21" height="14" rx="2.2" fill="#FFFFFF" />
                  <path d="M0 4.667h21v4.666H0z" fill="#0039A6" />
                  <path d="M0 9.333h21V11.8a2.2 2.2 0 0 1-2.2 2.2H2.2A2.2 2.2 0 0 1 0 11.8V9.333z" fill="#D52B1E" />
                </svg>
                <span>
                  Made in Russia
                </span>
              </span>
            <div className="conn is-connecting" id="conn" role="img" aria-label="RusnetVPN app, connected to Frankfurt from Moscow at 12 milliseconds.">
              <div className="row1">
                <span className="st is-connecting" id="conn-st">
                  <i className="pulse amber" id="conn-dot" />
                  <span id="conn-label">
                    Connecting…
                  </span>
                </span>
                {" "}
                <span className="ms mono" id="conn-ms">
                  — ms
                </span>
              </div>
              <div className="route">
                <span className="flag f1" />
                {" "}
                <span>
                  Moscow
                </span>
                {" "}
                <span className="dash" />
                {" "}
                <span>
                  Frankfurt
                </span>
                {" "}
                <span className="flag f2" />
              </div>
              <span className="conn-act">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 8a5.5 5.5 0 1 1-1.7-4" />
                  <path d="M13 1.5V4h-2.5" />
                </svg>
                {" "}Try another server
              </span>
              <div className="bars">
                <i style={{ animationDelay: "0s" }} />
                <i style={{ animationDelay: ".12s" }} />
                <i style={{ animationDelay: ".24s" }} />
                <i style={{ animationDelay: ".36s" }} />
                {" "}
                <i style={{ animationDelay: ".48s" }} />
                <i style={{ animationDelay: ".6s" }} />
                <i style={{ animationDelay: ".72s" }} />
                <i style={{ animationDelay: ".84s" }} />
                {" "}
                <i style={{ animationDelay: ".96s" }} />
                <i style={{ animationDelay: "1.08s" }} />
                <i style={{ animationDelay: "1.2s" }} />
                <i style={{ animationDelay: "1.32s" }} />
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* data-count is written by JS from FACTS, which is summed from the region
                  table further down the page. */}
        <div className="stats up" style={{ "--d": "120ms" }}>
          <div className="st">
            <div className="n mono">
              <span data-count-fact="servers">
                0
              </span>
              <em>
                +
              </em>
            </div>
            <div className="l">
              Servers ready for you
            </div>
          </div>
          <div className="st">
            <div className="n mono">
              <span data-count-fact="countries">
                0
              </span>
              <em>
                +
              </em>
            </div>
            <div className="l">
              Countries on the map
            </div>
          </div>
          <div className="st">
            <div className="n mono">
              0
            </div>
            <div className="l">
              Logs of what you do
            </div>
          </div>
          <div className="st">
            <div className="n mono">
              <span data-count-fact="continents">
                0
              </span>
            </div>
            <div className="l">
              Continents covered
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
