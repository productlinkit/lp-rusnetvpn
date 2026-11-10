export default function Tech() {
  return (
    <>
      <section className="sec wrap" id="tech" style={{ paddingTop: "0" }}>
        <div className="sec-head">
          <div className="col up">
            <span className="eyebrow">
              Features
            </span>
            <h2>
              Everything you need, nothing you don’t
            </h2>
          </div>
          <p className="aside up" style={{ "--d": "100ms" }}>
            Strong security, quick connections and open access, built into every plan.
          </p>
        </div>
        <div className="bento up" id="bento">
          <button className="tile wide" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z" />
                <path d="M9.5 12l1.8 1.8L15 10" />
              </svg>
            </span>
            <h3>
              DNS Leak Protection
            </h3>
            <p>
              Every lookup stays inside the tunnel. Nothing leaks to your provider.
            </p>
            <span className="more">
              <div>
                <p>
                  Your DNS requests stay inside the encrypted tunnel, so your provider can’t see which sites you look up.
                </p>
              </div>
            </span>
            {" "}
            <span className="viz">
              <i style={{ height: "34%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "41%" }} />
              <i style={{ height: "76%" }} />
              <i style={{ height: "52%" }} />
              <i style={{ height: "88%" }} />
              <i style={{ height: "63%" }} />
              <i style={{ height: "96%" }} />
              <i style={{ height: "71%" }} />
              <i style={{ height: "45%" }} />
              <i style={{ height: "82%" }} />
              <i style={{ height: "56%" }} />
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h5l3 5 3-5h5M4 17h5l3-5" />
                <path d="M17 4l3 3-3 3M17 14l3 3-3 3" />
              </svg>
            </span>
            <h3>
              Split Tunneling
            </h3>
            <p>
              Choose which apps use the VPN and which connect directly.
            </p>
            <span className="more">
              <div>
                <p>
                  With{" "}
                  <span data-fact="servers">
                    700
                  </span>
                  + servers in{" "}
                  <span data-fact="countries">
                    90
                  </span>
                  + countries, send only the apps you choose through the VPN and let the rest connect as normal.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v7" />
                <path d="M7.5 6.5a7 7 0 1 0 9 0" />
              </svg>
            </span>
            <h3>
              Strict No-Logs
            </h3>
            <p>
              We don’t store your traffic. Not now, not later.
            </p>
            <span className="more">
              <div>
                <p>
                  No browsing history, traffic logs, DNS queries or connection timestamps are tied to your account. An independent no-log audit is in progress.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
              </svg>
            </span>
            <h3>
              Modern Protocols
            </h3>
            <p>
              WireGuard by default, OpenVPN when a network needs it. Fast and secure either way.
            </p>
            <span className="more">
              <div>
                <p>
                  The app picks the right protocol for each network on its own, so you never have to.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="7" rx="2" />
                <rect x="3" y="13" width="18" height="7" rx="2" />
                <path d="M7 7.5h.01M7 16.5h.01" />
              </svg>
            </span>
            <h3>
              Local Reliability
            </h3>
            <p>
              Owned and operated in-house, to strict Russian security standards.
            </p>
            <span className="more">
              <div>
                <p>
                  A local team runs every server, so there’s no foreign company in the middle.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile wide" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
              </svg>
            </span>
            <h3>
              Global Coverage
            </h3>
            <p>
              <span data-fact="servers">
                700
              </span>
              + servers across{" "}
              <span data-fact="countries">
                90
              </span>
              + countries on{" "}
              <span data-fact="continentsWord">
                six
              </span>
              {" "}continents, so there is always one close to you.
            </p>
            <span className="more">
              <div>
                <p>
                  Pick a country and we place you on the healthiest machine inside it. Automatic switching keeps a busy node from ever becoming your problem.
                </p>
              </div>
            </span>
            {" "}
            <span className="geo">
              <span>
                <i />
                North America
              </span>
              {" "}
              <span>
                <i />
                South America
              </span>
              {" "}
              <span>
                <i />
                Europe
              </span>
              {" "}
              <span>
                <i />
                Asia
              </span>
              {" "}
              <span>
                <i />
                Africa
              </span>
              {" "}
              <span>
                <i />
                Oceania
              </span>
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z" />
                <path d="M9 12h6M12 9v6" />
              </svg>
            </span>
            <h3>
              Private by Design
            </h3>
            <p>
              No third party ever sees your VPN traffic. Everything is managed from Moscow.
            </p>
            <span className="more">
              <div>
                <p>
                  Browse knowing nobody is looking over your shoulder.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
                <path d="M20 6.5h-3M20 17.5h-4" />
              </svg>
            </span>
            <h3>
              Fast Hardware
            </h3>
            <p>
              Modern servers keep speeds high and streams smooth.
            </p>
            <span className="more">
              <div>
                <p>
                  Streaming-optimized servers around the world get the most from the subscriptions you already have.
                </p>
              </div>
            </span>
          </button>
          {" "}
          <button className="tile wide" data-t="">
            <span className="togg">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8a8 4 0 1 0 16 0A8 4 0 1 0 4 8" />
                <path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" />
                <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" />
              </svg>
            </span>
            <h3>
              Auto Switching
            </h3>
            <p>
              If a server gets busy, you’re moved to a better one automatically.
            </p>
            <span className="more">
              <div>
                <p>
                  <span data-fact="servers">
                    700
                  </span>
                  + servers worldwide, spanning North America, South America, Europe, Asia, Africa, and Oceania.
                </p>
              </div>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
