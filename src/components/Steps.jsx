import { useEffect, useState } from 'react';

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

const PLANS = [['1 Week', ''], ['1 Month', ''], ['1 Year', 'Save 50%']];
const DEVICES = ['iPhone', 'Android', 'Windows', 'Mac', 'Tablet'];
const DUR = 5200;

// each step has its own little screen, and the screens can be played with
function Screen({ step, plan, setPlan, dev, setDev, on, setOn }) {
  if (step === 0) {
    return (
      <div className="hw-scr hw-plans">
        <p className="hw-cap">Pick a plan</p>
        {PLANS.map(([n, s], i) => (
          <button key={n} type="button" className={`hw-plan${plan === i ? ' on' : ''}`} onClick={() => setPlan(i)}>
            <span className="hw-radio" />
            <b>{n}</b>
            {s && <em>{s}</em>}
          </button>
        ))}
        <span className="hw-note">30-day money-back guarantee</span>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="hw-scr hw-devs">
        <p className="hw-cap">
          Devices <span className="mono">{dev.length}/5</span>
        </p>
        <div className="hw-devgrid">
          {DEVICES.map((d, i) => (
            <button
              key={d}
              type="button"
              className={`hw-dev${dev.includes(i) ? ' on' : ''}`}
              onClick={() => setDev(dev.includes(i) ? dev.filter((x) => x !== i) : [...dev, i])}
            >
              <i />
              {d}
            </button>
          ))}
        </div>
        <span className="hw-bar"><i style={{ width: `${dev.length * 20}%` }} /></span>
      </div>
    );
  }
  return (
    <div className={`hw-scr hw-conn${on ? ' is-on' : ''}`}>
      <p className="hw-cap">{on ? 'Protected' : 'Not protected'}</p>
      <button type="button" className="hw-power" onClick={() => setOn(!on)} aria-pressed={on}>
        <span className="hw-pulse" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 4v7" />
          <path d="M7.5 6.5a7 7 0 1 0 9 0" />
        </svg>
      </button>
      <p className="hw-loc">
        <span>Moscow</span>
        <i className="hw-dash" />
        <span>Frankfurt</span>
      </p>
      <span className="hw-note mono">{on ? '12 ms · encrypted' : 'Tap the button'}</span>
    </div>
  );
}

export default function Steps() {
  const [step, setStep] = useState(0);
  const [hold, setHold] = useState(false);
  const [plan, setPlan] = useState(2);
  const [dev, setDev] = useState([0, 2]);
  const [on, setOn] = useState(false);

  // plays through the steps on its own until someone takes over
  useEffect(() => {
    if (hold || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), DUR);
    return () => clearTimeout(t);
  }, [step, hold]);

  const pick = (i) => { setStep(i); setHold(true); };

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
          </div>
          <ol className="hw-steps" role="tablist" aria-label="Steps">
            {STEPS.map((s, i) => (
              <li key={s.t}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === step}
                  className={`hw-step${i === step ? ' on' : ''}${i < step ? ' done' : ''}${hold ? ' held' : ''}`}
                  onClick={() => pick(i)}
                  style={{ '--dur': `${DUR}ms` }}
                >
                  <span className="hw-n mono">0{i + 1}</span>
                  <span className="hw-txt">
                    <b>{s.t}</b>
                    <span>{s.d}</span>
                  </span>
                  <span className="hw-prog" key={`${step}-${hold}`} />
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="hw-right" onPointerDown={() => setHold(true)}>
          <span className="hw-blob b1" aria-hidden="true" />
          <span className="hw-blob b2" aria-hidden="true" />
          <div className="hw-phone">
            <span className="hw-notch" />
            <div className="hw-slide" key={step}>
              <Screen step={step} plan={plan} setPlan={setPlan} dev={dev} setDev={setDev} on={on} setOn={setOn} />
            </div>
            <div className="hw-dots">
              {STEPS.map((s, i) => (
                <button key={s.t} type="button" className={i === step ? 'on' : ''} onClick={() => pick(i)} aria-label={`Step ${i + 1}`} />
              ))}
            </div>
          </div>
          <span className="hw-float f1 mono" aria-hidden="true">No logs</span>
          <span className="hw-float f2 mono" aria-hidden="true">WireGuard</span>
        </div>
      </div>
    </section>
  );
}
