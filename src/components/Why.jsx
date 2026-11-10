import { useEffect, useRef, useState } from 'react';
import benefit1Img from '../assets/images/benefit-1.jpg';
import benefit2Img from '../assets/images/benefit-2.jpg';
import benefit3Img from '../assets/images/benefit-3.jpg';
import benefit4Img from '../assets/images/benefit-4.jpg';

const ITEMS = [
  {
    img: benefit1Img,
    alt: 'RusnetVPN app connected to an optimized streaming server',
    tag: 'Streaming',
    t: 'Watch like you never left home',
    d: 'Servers tuned for video keep the shows and subscriptions you already pay for playing without the spinning wheel.',
  },
  {
    img: benefit2Img,
    alt: 'RusnetVPN app screen showing the no-logs policy',
    tag: 'Privacy',
    t: 'No logs. Not even a little.',
    d: 'Browsing, traffic, DNS queries and connection times are never stored. An independent audit of this is in progress.',
  },
  {
    img: benefit3Img,
    alt: 'RusnetVPN server list, run on locally owned servers',
    tag: 'Independence',
    t: 'Built here, run here',
    d: 'A local team owns and runs every server. There is no foreign parent company and no one in the middle.',
  },
  {
    img: benefit4Img,
    alt: 'RusnetVPN app browsing content without restrictions',
    tag: 'Access',
    t: (
      <>
        <span data-fact="countries">90</span>+ countries, one switch
      </>
    ),
    d: (
      <>
        Jump between <span data-fact="servers">700</span>+ servers to reach the music, news and apps you want, wherever you happen to be.
      </>
    ),
  },
];

export default function Why() {
  const [on, setOn] = useState(0);
  const list = useRef(null);

  // the item crossing the middle of the screen becomes the one shown in the phone
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setOn(+e.target.dataset.i)),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    list.current.querySelectorAll('.show-item').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec wrap" id="why">
      <div className="show">
        <div className="show-media">
          <div className="show-frame">
            {ITEMS.map((it, i) => (
              <img key={i} src={it.img} alt={it.alt} className={i === on ? 'on' : ''} />
            ))}
            <span className="show-count mono">
              {String(on + 1).padStart(2, '0')} / 04
            </span>
          </div>
        </div>
        <div className="show-copy">
          <div className="show-head up">
            <span className="eyebrow">Why Rusnet</span>
            <h2>
              Made for people who{" "}
              <span className="serif">value quiet</span>
            </h2>
            <p className="lead">No trackers, no middlemen, no slowdowns. Here is what that looks like day to day.</p>
          </div>
          <ol className="show-list" ref={list}>
            {ITEMS.map((it, i) => (
              <li key={i} data-i={i} className={`show-item${i === on ? ' on' : ''}`}>
                <button type="button" onClick={() => setOn(i)} onMouseEnter={() => setOn(i)} aria-pressed={i === on}>
                  <span className="show-tag">{it.tag}</span>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
