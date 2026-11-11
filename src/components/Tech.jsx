import appShot1Img from '../assets/images/app-shot-1.jpg';
import appShot3Img from '../assets/images/app-shot-3.jpg';
import europeImg from '../assets/images/region-europe.jpg';
import asiaImg from '../assets/images/region-asia.jpg';
import naImg from '../assets/images/region-north-america.jpg';
import saImg from '../assets/images/region-south-america.jpg';

const VS = [
  ['Logs of your activity', 'Never stored', 'Often kept'],
  ['Who runs the servers', 'Our own team', 'Rented from third parties'],
  ['DNS leak protection', 'Always on', 'Not always included'],
  ['Foreign parent company', 'None', 'Common'],
  ['When a server is busy', 'Switched for you', 'You switch by hand'],
  ['Money-back guarantee', '30 days', 'Varies, or none'],
];

const Tick = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.2 3.2L13 5" /></svg>
);

export default function Tech() {
  return (
    <section className="b-sec wrap b-feat" id="tech">
      <div className="b-head">
        <div>
          <p className="b-kicker">Features</p>
          <h2>Everything you need in one app</h2>
        </div>
        <div className="b-head-side">
          <p>Every plan comes with all of it. There are no add-ons to buy later.</p>
        </div>
      </div>

      <div className="b-bento">
        <article className="b-tile t-app dark b-reveal">
          <h3>One tap to go private</h3>
          <p>Open the app, tap connect, and the fastest server near you does the rest.</p>
          <div className="b-tile-phone"><img src={appShot1Img} alt="RusnetVPN app showing a connected session" /></div>
        </article>

        <article className="b-tile t-logs soft b-reveal">
          <div className="b-tile-copy">
            <h3>No logs, nothing to hand over</h3>
            <p>No browsing history, traffic, DNS queries or timestamps are tied to your account.</p>
          </div>
          <div className="b-tile-shot"><img src={appShot3Img} alt="RusnetVPN settings screen" /></div>
          <div className="b-float-card">
            <span>DNS leak protection</span>
            <b>On</b>
          </div>
        </article>

        <article className="b-tile t-reach soft b-reveal">
          <h3><span data-fact="servers">100</span>+ servers</h3>
          <div className="b-faces">
            {[europeImg, asiaImg, naImg, saImg].map((src) => <img key={src} src={src} alt="" />)}
            <span>+90</span>
          </div>
          <p>In <span data-fact="countries">90</span>+ countries on six continents.</p>
        </article>

        <article className="b-tile t-split dark b-reveal">
          <h3>Split tunneling</h3>
          <p>Choose which apps use the VPN and which connect directly.</p>
          <div className="b-split-cards">
            <div className="b-mini"><span>Browser</span><b>Through VPN</b></div>
            <div className="b-mini m2"><span>Banking app</span><b>Direct</b></div>
          </div>
        </article>

        <article className="b-tile t-refund red b-reveal">
          <div className="b-tile-copy">
            <h3>30-day money-back guarantee</h3>
            <p>If RusnetVPN isn’t right for you, ask within 30 days for a full refund.</p>
          </div>
          <div className="b-tilt-card">
            <span className="b-coin">$</span>
            <b>Full refund</b>
            <span>No questions asked</span>
          </div>
        </article>

        <article className="b-tile t-speed soft b-reveal">
          <div className="b-tile-copy">
            <h3>Fast by default</h3>
            <p>WireGuard, modern hardware and auto switching keep things quick.</p>
          </div>
          <div className="b-ring-card">
            <p>Moscow to Frankfurt</p>
            <div className="b-ring"><b>12</b><span>ms</span></div>
          </div>
        </article>
      </div>

      <div className="b-vs b-reveal">
        <div className="b-vs-head">
          <h3>RusnetVPN next to other VPNs</h3>
          <p>Most VPNs promise privacy. This is how we keep it.</p>
        </div>
        <div className="b-vs-table" role="table" aria-label="RusnetVPN compared with other VPNs">
          <div className="b-vs-row top" role="row">
            <span role="columnheader"><span className="sr-only">Feature</span></span>
            <span role="columnheader" className="us">RusnetVPN</span>
            <span role="columnheader">Many other VPNs</span>
          </div>
          {VS.map(([q, us, them]) => (
            <div className="b-vs-row" role="row" key={q}>
              <span role="rowheader">{q}</span>
              <span role="cell" className="us"><i><Tick /></i>{us}</span>
              <span role="cell" className="them">{them}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
