import benefit1Img from '../assets/images/benefit-1.jpg';
import benefit2Img from '../assets/images/benefit-2.jpg';
import benefit3Img from '../assets/images/benefit-3.jpg';
import benefit4Img from '../assets/images/benefit-4.jpg';

export default function Why() {
  return (
    <>
      <section className="sec wrap" id="why">
        {/* sticky while the section scrolls by; scrollfx.js turns that scroll into the rail sliding sideways */}
        <div className="why-pin">
        <div className="sec-head">
          <div className="col up">
            <span className="eyebrow">
              Why Rusnet
            </span>
            <h2>
              Four reasons people switch
            </h2>
          </div>
          <p className="aside up" style={{ "--d": "100ms" }}>
            Independent, locally owned and built to keep what you do online to yourself.
          </p>
        </div>
        <div className="rail up" id="rail">
          <button className="rcard is-open" data-i="0" aria-expanded="true">
            <figure className="media">
              <img src={benefit1Img} alt="RusnetVPN app connected to an optimized streaming server" />
            </figure>
            <span className="veil" />
            {" "}
            <span className="num mono">
              01
            </span>
            {" "}
            <span className="plus">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="vert">
              <span>
                Streaming without the buffering
              </span>
            </span>
            {" "}
            <span className="full">
              <h3>
                Streaming without the buffering
              </h3>
              <p>
                Servers tuned for streaming around the world, so the subscriptions you already pay for play smoothly.
              </p>
              <span className="pill">
                <span>
                  Streaming-ready servers
                </span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
            </span>
          </button>
          {" "}
          <button className="rcard" data-i="1" aria-expanded="false">
            <figure className="media">
              <img src={benefit2Img} alt="RusnetVPN app screen showing the no-logs policy" />
            </figure>
            <span className="veil" />
            {" "}
            <span className="num mono">
              02
            </span>
            {" "}
            <span className="plus">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="vert">
              <span>
                Nothing logged, nothing to share
              </span>
            </span>
            {" "}
            <span className="full">
              <h3>
                Nothing logged, nothing to share
              </h3>
              <p>
                We don’t keep your browsing, traffic, DNS queries or connection history. An independent no-log audit is in progress.
              </p>
              <span className="pill">
                <span>
                  Audit in progress
                </span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
            </span>
          </button>
          {" "}
          <button className="rcard" data-i="2" aria-expanded="false">
            <figure className="media">
              <img src={benefit3Img} alt="RusnetVPN server list, run on locally owned servers" />
            </figure>
            <span className="veil" />
            {" "}
            <span className="num mono">
              03
            </span>
            {" "}
            <span className="plus">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="vert">
              <span>
                Locally owned, fully independent
              </span>
            </span>
            {" "}
            <span className="full">
              <h3>
                Locally owned, fully independent
              </h3>
              <p>
                RusnetVPN is owned and run by a local team that cares about privacy, with no foreign parent company behind it.
              </p>
              <span className="pill">
                <span>
                  Run in-house
                </span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
            </span>
          </button>
          {" "}
          <button className="rcard" data-i="3" aria-expanded="false">
            <figure className="media">
              <img src={benefit4Img} alt="RusnetVPN app browsing content without restrictions" />
            </figure>
            <span className="veil" />
            {" "}
            <span className="num mono">
              04
            </span>
            {" "}
            <span className="plus">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
            {" "}
            <span className="vert">
              <span>
                Your content, from anywhere
              </span>
            </span>
            {" "}
            <span className="full">
              <h3>
                Your content, from anywhere
              </h3>
              <p>
                With{" "}
                <span data-fact="servers">
                  700
                </span>
                + servers in{" "}
                <span data-fact="countries">
                  90
                </span>
                + countries, reach the shows, music and apps you love, wherever you are.
              </p>
              <span className="pill">
                <span>
                  <span data-fact="countries">
                    90
                  </span>
                  + countries
                </span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
            </span>
          </button>
        </div>
        </div>
      </section>
    </>
  );
}
