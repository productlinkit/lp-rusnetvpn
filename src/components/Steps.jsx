import { useState } from 'react';
import appShot4Img from '../assets/images/app-shot-4.jpg';

const APP_URL = 'https://rusnetvpn-app.vercel.app';

const Arrow = ({ flip }) => (
  <svg className={`b-note-arrow${flip ? ' flip' : ''}`} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M3 14c8-9 20-11 32-6" />
    <path d="M30 4l5 4-6 3" />
  </svg>
);

export default function Steps() {
  const [plan, setPlan] = useState(2);
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <section className="b-sec b-how wrap" id="how">
      <div className="b-head">
        <div>
          <p className="b-kicker">How it works</p>
          <h2>Protected in four easy steps</h2>
        </div>
        <div className="b-head-side">
          <p>The phone on the right is the real RusnetVPN app. Follow the steps and try it.</p>
        </div>
      </div>

      <div className="b-how-grid">
        <div className="b-steps">
          <span className="b-note n1">a week, a month<br />or a year<Arrow /></span>
          <span className="b-note n2"><Arrow flip />five devices,<br />one account</span>
          <span className="b-note n3">the app picks<br />the server<Arrow /></span>
          <span className="b-note n4"><Arrow flip />nothing is<br />ever logged</span>

          <article className="b-step s1 b-reveal">
            <p className="b-step-n">Step 1</p>
            <div className="b-step-vis">
              <div className="b-mini-plans">
                {[['1 Week', ''], ['1 Month', ''], ['1 Year', 'Save 50%']].map(([n, s], i) => (
                  <button type="button" key={n} className={plan === i ? 'on' : ''} onClick={() => setPlan(i)}>
                    <i />{n}{s && <em>{s}</em>}
                  </button>
                ))}
              </div>
            </div>
            <div className="b-folder">
              <h3>Choose a plan</h3>
              <p>Every plan has every feature, and the first 30 days are refundable.</p>
            </div>
          </article>

          <article className="b-step s2 b-reveal">
            <p className="b-step-n">Step 2</p>
            <div className="b-step-vis">
              <img className="b-step-shot" src={appShot4Img} alt="RusnetVPN app opening on a phone" />
              <span className="b-os">
                <span>iOS</span><span>Android</span><span>Windows</span><span>Mac</span>
              </span>
            </div>
            <div className="b-folder">
              <h3>Install the app</h3>
              <p>Sign in on up to five devices with one account.</p>
            </div>
          </article>

          <article className="b-step s3 b-reveal">
            <p className="b-step-n">Step 3</p>
            <div className="b-step-vis">
              <button type="button" className={`b-power${on ? ' on' : ''}`} onClick={() => setOn(!on)} aria-pressed={on}>
                <span className="b-power-ring" />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 4v7" /><path d="M7.5 6.5a7 7 0 1 0 9 0" /></svg>
              </button>
              <span className={`b-power-l${on ? ' on' : ''}`}>{on ? 'Connected · Frankfurt' : 'Tap to connect'}</span>
            </div>
            <div className="b-folder">
              <h3>Tap connect</h3>
              <p>The app finds the fastest server near you by itself.</p>
            </div>
          </article>

          <article className="b-step s4 b-reveal">
            <p className="b-step-n">Step 4</p>
            <div className="b-step-vis b-icons">
              <span className="b-ic i1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z" /><path d="M9.5 12l1.8 1.8L15 10" /></svg></span>
              <span className="b-ic i2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg></span>
              <span className="b-ic i3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span>
            </div>
            <div className="b-folder">
              <h3>Browse privately</h3>
              <p>Your traffic is encrypted, and none of it is ever kept.</p>
            </div>
          </article>
        </div>

        <aside className="b-live b-reveal">
          <div className="b-live-top">
            <h3>Try the real app</h3>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="b-link-light">Full screen</a>
          </div>
          <div className="b-phone">
            <span className="b-notch" />
            <div className={`b-screen${ready ? ' ready' : ''}`}>
              <iframe src={APP_URL} title="RusnetVPN app" loading="lazy" onLoad={() => setReady(true)} />
              <span className="b-loading" aria-hidden="true" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
