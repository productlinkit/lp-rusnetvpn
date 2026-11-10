import { useEffect, useRef } from 'react';

const LINES = ['Nobody sees', 'what you do', 'online.'];
const GLYPHS = '01/|!?:;x7il';

export default function Hero() {
  const head = useRef(null);

  // letters near the pointer turn into ciphertext and settle back, which is
  // what the VPN does to your traffic. Touch screens get one sweep on load.
  useEffect(() => {
    const h = head.current;
    if (!h || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const chars = Array.from(h.querySelectorAll('.hz-c'));
    // lock each letter to its own width so ciphertext never shifts the line
    const fix = () => {
      chars.forEach((el) => { el.style.width = ''; el.textContent = el.dataset.c; });
      chars.forEach((el) => { el.style.width = `${el.getBoundingClientRect().width}px`; });
    };
    window.addEventListener('resize', fix);
    let dead = false;
    const until = new Map();
    let raf = 0, px = -1e4, py = -1e4, live = false;

    const scramble = (el, t) => {
      if (!until.has(el)) el.classList.add('is-x');
      until.set(el, t);
    };
    const tick = () => {
      raf = 0;
      const now = performance.now();
      if (live) {
        chars.forEach((el) => {
          const r = el.getBoundingClientRect();
          const dx = r.left + r.width / 2 - px, dy = r.top + r.height / 2 - py;
          if (dx * dx + dy * dy < 120 * 120) scramble(el, now + 420);
        });
      }
      until.forEach((t, el) => {
        if (now > t) { el.textContent = el.dataset.c; el.classList.remove('is-x'); until.delete(el); }
        else el.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      });
      if (until.size || live) raf = requestAnimationFrame(tick);
    };
    const go = () => { if (!raf) raf = requestAnimationFrame(tick); };

    const move = (e) => { px = e.clientX; py = e.clientY; live = true; go(); };
    const leave = () => { live = false; go(); };
    h.addEventListener('pointermove', move);
    h.addEventListener('pointerleave', leave);

    // the one orchestrated moment: a single left-to-right pass after load
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
      if (dead) return;
      fix();
      chars.forEach((el, i) => setTimeout(() => { if (!dead) { scramble(el, performance.now() + 380); go(); } }, 300 + i * 22));
    });

    return () => { dead = true; window.removeEventListener('resize', fix); h.removeEventListener('pointermove', move); h.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <section className="hero wrap hz" aria-label="Hero section">
        <div className="hz-side">
          <p className="hz-lead">
            The safest, most private way to get online. RusnetVPN encrypts everything that leaves your phone or laptop and sends it through our own servers. No logs, no third parties, and a full refund if it isn’t for you within 30 days.
          </p>
          <div className="hz-cta">
            <a href="#" className="btn hz-btn" data-buy="">
              Start a 30-day trial
            </a>
            <a href="#how" className="hz-link">
              See how it works
            </a>
          </div>
        </div>

        <h1 className="hz-head" ref={head} aria-label={LINES.join(' ')}>
          {LINES.map((line, li) => (
            <span className="hz-line" key={li} aria-hidden="true">
              {Array.from(line).map((c, ci) =>
                c === ' '
                  ? <span className="hz-sp" key={ci}> </span>
                  : <span className="hz-c" data-c={c} key={ci}>{c}</span>,
              )}
            </span>
          ))}
        </h1>

        <div className="stage hz-route">
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
              servers
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
              countries
            </div>
          </div>
          <div className="st">
            <div className="n mono">
              0
            </div>
            <div className="l">
              logs kept
            </div>
          </div>
          <div className="st">
            <div className="n mono">
              <span data-count-fact="continents">
                0
              </span>
            </div>
            <div className="l">
              continents
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
