import { useState } from 'react';

const I = {
  shield: <><path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z" /><path d="M9.5 12l1.8 1.8L15 10" /></>,
  power: <><path d="M12 4v7" /><path d="M7.5 6.5a7 7 0 1 0 9 0" /></>,
  lock: <><path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z" /><path d="M9 12h6M12 9v6" /></>,
  bolt: <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />,
  fast: <><path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" /><path d="M20 6.5h-3M20 17.5h-4" /></>,
  swap: <><path d="M4 8a8 4 0 1 0 16 0A8 4 0 1 0 4 8" /><path d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8" /><path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" /></>,
  split: <><path d="M4 7h5l3 5 3-5h5M4 17h5l3-5" /><path d="M17 4l3 3-3 3M17 14l3 3-3 3" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
};

const GROUPS = [
  {
    key: 'privacy',
    label: 'Privacy',
    title: 'Nobody sees where you go',
    items: [
      { ic: I.power, t: 'Strict no-logs', d: 'No browsing history, traffic, DNS queries or timestamps tied to your account.' },
      { ic: I.shield, t: 'DNS leak protection', d: 'Every lookup stays inside the encrypted tunnel, hidden from your provider.' },
      { ic: I.lock, t: 'Private by design', d: 'No third party ever touches your VPN traffic. Everything is managed from Moscow.' },
    ],
  },
  {
    key: 'speed',
    label: 'Speed',
    title: 'Fast enough to forget it is on',
    items: [
      { ic: I.bolt, t: 'Modern protocols', d: 'WireGuard by default, OpenVPN when a network needs it. The app chooses for you.' },
      { ic: I.fast, t: 'Fast hardware', d: 'Modern, streaming-tuned servers keep speeds high and video smooth.' },
      { ic: I.swap, t: 'Auto switching', d: 'If a server gets busy you are moved to a healthier one without lifting a finger.' },
    ],
  },
  {
    key: 'control',
    label: 'Control',
    title: 'You decide what goes through',
    items: [
      { ic: I.split, t: 'Split tunneling', d: 'Send only the apps you pick through the VPN and let the rest connect as normal.' },
      { ic: I.globe, t: 'Global coverage', d: (<><span data-fact="servers">700</span>+ servers across <span data-fact="countries">90</span>+ countries on six continents.</>) },
      { ic: I.server, t: 'Local reliability', d: 'Owned and operated in-house to strict Russian security standards.' },
    ],
  },
];

const VS = [
  ['Logs of your activity', 'Never stored', 'Often kept'],
  ['Who runs the servers', 'Our own team', 'Rented from third parties'],
  ['DNS leak protection', 'Always on', 'Not always included'],
  ['Foreign parent company', 'None', 'Common'],
  ['Busy server', 'Switched for you', 'You switch by hand'],
  ['Money-back guarantee', '30 days', 'Varies, or none'],
];

export default function Tech() {
  const [g, setG] = useState(0);
  const cur = GROUPS[g];

  return (
    <section className="sec wrap" id="tech">
      <div className="ft-head up">
        <div>
          <span className="eyebrow">Features</span>
          <h2>
            Nine tools,{" "}
            <span className="serif">three promises</span>
          </h2>
        </div>
        <div className="ft-tabs" role="tablist" aria-label="Feature group">
          {GROUPS.map((x, i) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={i === g}
              className={i === g ? 'on' : ''}
              onClick={() => setG(i)}
            >
              <span className="mono">0{i + 1}</span> {x.label}
            </button>
          ))}
        </div>
      </div>
      <div className="ft-panel" role="tabpanel" key={cur.key}>
        <p className="ft-title">{cur.title}</p>
        <div className="ft-grid">
          {cur.items.map((it, i) => (
            <article key={i} className="ft-card" style={{ "--i": i }}>
              <span className="ft-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {it.ic}
                </svg>
              </span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="vs up">
        <div className="vs-head">
          <span className="eyebrow">Compare</span>
          <h3>
            Safer and more private{" "}
            <span className="serif">than other VPNs</span>
          </h3>
          <p>Most VPNs promise privacy. Here is how RusnetVPN keeps it, side by side with what you usually get elsewhere.</p>
        </div>
        <div className="vs-table" role="table" aria-label="RusnetVPN compared with other VPNs">
          <div className="vs-row vs-top" role="row">
            <span role="columnheader" />
            <span role="columnheader" className="vs-us">RusnetVPN</span>
            <span role="columnheader">Many other VPNs</span>
          </div>
          {VS.map(([q, us, them]) => (
            <div className="vs-row" role="row" key={q}>
              <span role="rowheader">{q}</span>
              <span role="cell" className="vs-us"><i className="vs-yes" aria-hidden="true" />{us}</span>
              <span role="cell" className="vs-them"><i className="vs-no" aria-hidden="true" />{them}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
