const STEPS = [
  {
    n: '01',
    t: 'Choose a plan',
    d: 'Start with a week or lock in a year. Every plan includes every feature, and the first 30 days are refundable.',
    icon: <><rect x="4" y="5" width="16" height="14" rx="3" /><path d="M4 10h16M8 15h3" /></>,
  },
  {
    n: '02',
    t: 'Install on your devices',
    d: 'Get the app for iPhone, Android, Windows or Mac and sign in on up to five devices at once.',
    icon: <><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></>,
  },
  {
    n: '03',
    t: 'Tap connect',
    d: 'The app picks the fastest server near you. From that moment your traffic is encrypted and private.',
    icon: <><path d="M12 4v7" /><path d="M7.5 6.5a7 7 0 1 0 9 0" /></>,
  },
];

export default function Steps() {
  return (
    <section className="sec wrap" id="how">
      <div className="how-head up">
        <span className="eyebrow">How it works</span>
        <h2>
          Protected in under{" "}
          <span className="serif">a minute</span>
        </h2>
      </div>
      <ol className="how-steps">
        {STEPS.map((s, i) => (
          <li key={s.n} className="how-step up" style={{ "--d": `${i * 120}ms` }}>
            <span className="how-n mono">{s.n}</span>
            <span className="how-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {s.icon}
              </svg>
            </span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
