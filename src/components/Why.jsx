const REFUSALS = [
  {
    t: 'Keep logs',
    d: 'Your browsing, traffic, DNS lookups and connection times are never written down. An independent audit of this is in progress.',
  },
  {
    t: 'Rent our servers',
    d: 'A local team owns and runs every machine, so nobody between you and the internet works for someone else.',
  },
  {
    t: 'Answer to a parent company',
    d: 'RusnetVPN is independent. There is no foreign owner that can ask for your data.',
  },
  {
    t: 'Slow you down',
    d: 'Servers tuned for video and automatic switching keep streams smooth, so you never have to choose between private and fast.',
  },
];

export default function Why() {
  return (
    <section className="sec wrap" id="why">
      <div className="nope">
        <h2 className="nope-head">Things we will never do</h2>
        <p className="nope-lead">
          Most VPNs talk about what they do. The reason RusnetVPN is safer is the list of things we refuse to do.
        </p>
        <ul className="nope-list">
          {REFUSALS.map((r) => (
            <li key={r.t} className="nope-item" tabIndex={0}>
              <span className="nope-t">
                <s>{r.t}</s>
              </span>
              <p className="nope-d">{r.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
