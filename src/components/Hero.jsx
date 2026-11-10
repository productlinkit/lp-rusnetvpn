import heroImg from '../assets/images/hero.jpg';

export default function Hero() {
  return (
    <>
      <section className="hero wrap" aria-label="Hero section">
        <div className="hero-center">
          <span className="eyebrow up">
            <i className="dot" />
            <span>
              Safer and more private than the rest
            </span>
          </span>
          <h1 className="up" style={{ "--d": "60ms" }}>
            Your internet,{" "}
            <span className="serif">
              on your terms.
            </span>
          </h1>
          <p className="lead up" style={{ "--d": "120ms" }}>
            The safest, most private way to get online. One tap hides what you do. Pick from{" "}
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
        <div className="stage up" data-fx="" style={{ "--d": "200ms" }}>
          <figure className="media shot">
            <img src={heroImg} alt="Two people smiling and holding phones with RusnetVPN open" onError={(e) => e.currentTarget.remove()} />
            {" "}
            <span className="ph">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <circle cx="8.5" cy="9.5" r="1.6" />
                <path d="M4 17l4.5-4.5 3.5 3.5 3-2.5L20 18" />
              </svg>
              <b>
                images/rusnetvpn/hero.jpg
              </b>
              1600 × 1100
            </span>
          </figure>
          <span className="chip c1">
            <svg className="flagru" viewBox="0 0 21 14" aria-hidden="true" focusable="false">
              <rect width="21" height="14" rx="2.2" fill="#FFFFFF" />
              <path d="M0 4.667h21v4.666H0z" fill="#0039A6" />
              <path d="M0 9.333h21V11.8a2.2 2.2 0 0 1-2.2 2.2H2.2A2.2 2.2 0 0 1 0 11.8V9.333z" fill="#D52B1E" />
              <rect x=".45" y=".45" width="20.1" height="13.1" rx="1.75" fill="none" stroke="rgba(14,18,22,.18)" strokeWidth=".9" />
            </svg>
            <span>
              Made in Russia
            </span>
          </span>
          {" "}
          <span className="chip c2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
            </svg>
            <span>
              <span data-fact="servers">
                700
              </span>
              + servers worldwide
            </span>
          </span>
          {" "}
          <span className="chip c3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
            </svg>
            <span>
              Zero logs, always
            </span>
          </span>
          {/* This is a picture of the app, not the app, so it carries one accessible
                      description and hides its own internals rather than exposing a tunnel
                      status and a Retry button that do not connect to anything (4.1.2). The
                      states below are real design work: it opens on "Connecting", settles on
                      "Connected", and the failure path with its retry is built rather than
                      pretended away. */}
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
        {/* data-count is written by JS from FACTS, which is summed from the region
                  table further down the page. Nothing here is typed twice, so the counters
                  and the "700+ / 90+" copy cannot drift apart. */}
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
