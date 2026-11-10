import { useEffect, useRef } from 'react';
import heroVideo from '../assets/video/hero-story.mp4';
import heroPoster from '../assets/video/hero-story-poster.jpg';

export default function Hero() {
  const vid = useRef(null);

  // a still gradient is enough when motion is turned down
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) vid.current?.pause();
  }, []);

  return (
    <>
      <section className="hero wrap hx" aria-label="Hero section">
        <video
          className="hx-video"
          ref={vid}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
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
          <div className="stage hx-stage up" style={{ "--d": "200ms" }}>
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
