import heroImg from '../assets/images/hero.jpg';

export default function Hero() {
  return (
    <>
      <section className="hero wrap b-hero" aria-label="Hero section">
        <div className="b-hero-card">
          <img className="b-hero-img" src={heroImg} alt="Two people smiling and holding phones with RusnetVPN open" />
          <div className="b-hero-copy">
            <ul className="b-tags">
              <li>No logs</li>
              <li>30-day refund</li>
            </ul>
            <h1>
              The safest way to be online,{" "}
              <em>switched on in a tap</em>
            </h1>
            <p className="b-hero-lead">
              RusnetVPN hides what you do online on every device. Pick from{" "}
              <span data-fact="servers">100</span>+ servers in{" "}
              <span data-fact="countries">90</span>+ countries, and nothing you do is ever logged.
            </p>
            <div className="b-hero-cta">
              <a href="#" className="b-btn b-btn-light" data-buy="">
                Start your 30-day trial
                <span className="b-btn-ic" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M6 4h6v6" /></svg>
                </span>
              </a>
              <a href="#pricing" className="b-link-light">
                See plans
              </a>
            </div>
          </div>
          <div className="b-hero-side">
            <p className="b-hero-side-note">
              Every plan includes every feature
              <br />
              Five devices on one account
            </p>
            <div className="stage b-hero-conn">
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
