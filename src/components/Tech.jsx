const GROUPS = [
  {
    label: 'Privacy',
    items: [
      ['Strict no-logs', 'No browsing history, traffic, DNS queries or timestamps are tied to your account.'],
      ['DNS leak protection', 'Every lookup stays inside the encrypted tunnel, hidden from your internet provider.'],
      ['Private by design', 'No third party ever touches your VPN traffic. Everything is managed from Moscow.'],
    ],
  },
  {
    label: 'Speed',
    items: [
      ['Modern protocols', 'WireGuard by default, OpenVPN when a network needs it. The app picks for you.'],
      ['Fast hardware', 'Modern servers tuned for streaming keep video smooth and pages quick.'],
      ['Auto switching', 'If a server gets busy, the app moves you to a healthier one on its own.'],
    ],
  },
  {
    label: 'Control',
    items: [
      ['Split tunneling', 'Send only the apps you choose through the VPN and let the rest connect as normal.'],
      ['Global coverage', <><span data-fact="servers">700</span>+ servers in <span data-fact="countries">90</span>+ countries, on six continents.</>],
      ['Local reliability', 'Owned and operated in-house to strict Russian security standards.'],
    ],
  },
];

const VS = [
  ['Logs of your activity', 'Never stored', 'Often kept'],
  ['Who runs the servers', 'Our own team', 'Rented from third parties'],
  ['DNS leak protection', 'Always on', 'Not always included'],
  ['Foreign parent company', 'None', 'Common'],
  ['When a server is busy', 'Switched for you', 'You switch by hand'],
  ['Money-back guarantee', '30 days', 'Varies, or none'],
];

export default function Tech() {
  return (
    <section className="sec wrap" id="tech">
      <div className="spec">
        <h2 className="spec-head">What’s inside every plan</h2>
        <div className="spec-groups">
          {GROUPS.map((g) => (
            <div className="spec-group" key={g.label}>
              <h3 className="spec-label">{g.label}</h3>
              <dl className="spec-list">
                {g.items.map(([t, d]) => (
                  <div className="spec-row" key={t}>
                    <dt>{t}</dt>
                    <dd>{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>

      <div className="vs">
        <div className="vs-head">
          <h3>Side by side with other VPNs</h3>
          <p>Most VPNs promise privacy. This is how RusnetVPN keeps it, next to what you usually get elsewhere.</p>
        </div>
        <div className="vs-table" role="table" aria-label="RusnetVPN compared with other VPNs">
          <div className="vs-row vs-top" role="row">
            <span role="columnheader"><span className="sr-only">Feature</span></span>
            <span role="columnheader" className="vs-us">RusnetVPN</span>
            <span role="columnheader">Many other VPNs</span>
          </div>
          {VS.map(([q, us, them]) => (
            <div className="vs-row" role="row" key={q}>
              <span role="rowheader">{q}</span>
              <span role="cell" className="vs-us">{us}</span>
              <span role="cell" className="vs-them">{them}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
