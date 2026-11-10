import { useState } from 'react';

const APP_URL = 'https://rusnetvpn-app.vercel.app';

const STEPS = [
  {
    t: 'Choose a plan',
    d: 'Start with a week or lock in a year. Every plan includes every feature, and the first 30 days are refundable.',
  },
  {
    t: 'Install on your devices',
    d: 'Get the app for iPhone, Android, Windows or Mac and sign in on up to five devices at once.',
  },
  {
    t: 'Tap connect',
    d: 'The app picks the fastest server near you. From that moment your traffic is encrypted and private.',
  },
];

export default function Steps() {
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);

  return (
    <section className="sec wrap" id="how">
      <div className="hw">
        <div className="hw-left">
          <div className="hw-head up">
            <span className="eyebrow">How it works</span>
            <h2>
              Protected in under{" "}
              <span className="serif">a minute</span>
            </h2>
            <p className="lead">The phone on the right is the real RusnetVPN app. Follow the steps and try it yourself.</p>
          </div>
          <ol className="hw-steps" role="tablist" aria-label="Steps">
            {STEPS.map((s, i) => (
              <li key={s.t}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === step}
                  className={`hw-step held${i === step ? ' on' : ''}`}
                  onClick={() => setStep(i)}
                  onMouseEnter={() => setStep(i)}
                >
                  <span className="hw-n mono">0{i + 1}</span>
                  <span className="hw-txt">
                    <b>{s.t}</b>
                    <span>{s.d}</span>
                  </span>
                  <span className="hw-prog" />
                </button>
              </li>
            ))}
          </ol>
          <a href={APP_URL} className="btn btn-ghost hw-open" target="_blank" rel="noopener noreferrer">
            <span>Open the app full screen</span>
            <span className="arw">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12L12 4M6 4h6v6" />
              </svg>
            </span>
          </a>
        </div>
        <div className="hw-right">
          <span className="hw-blob b1" aria-hidden="true" />
          <span className="hw-blob b2" aria-hidden="true" />
          <div className="hw-phone hw-live">
            <span className="hw-notch" />
            <div className={`hw-screen${ready ? ' is-ready' : ''}`}>
              {/* the live app, laid out at a real phone width and scaled into the frame */}
              <iframe
                src={APP_URL}
                title="RusnetVPN app"
                loading="lazy"
                onLoad={() => setReady(true)}
              />
              <span className="hw-loading" aria-hidden="true" />
            </div>
          </div>
          <span className="hw-float f1 mono" aria-hidden="true">Live app</span>
          <span className="hw-float f2 mono" aria-hidden="true">Tap to try</span>
        </div>
      </div>
    </section>
  );
}
