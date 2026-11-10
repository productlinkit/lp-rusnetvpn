import cityImg from '../assets/images/auth-side.jpg';

export default function About() {
  return (
    <section className="wrap b-about" id="about">
      <figure className="b-about-img b-reveal">
        <img src={cityImg} alt="A city skyline with a shield over it, standing for a protected connection" />
      </figure>
      <div className="b-about-copy b-reveal">
        <p className="b-kicker">About RusnetVPN</p>
        <p className="b-statement">
          RusnetVPN is built and run by a local team in Moscow with one simple rule: what you do online belongs to you. We own our servers, we keep no logs, and there is no foreign company behind us that could ask for your data.
        </p>
        <div className="b-row">
          <a href="#" className="b-btn" data-buy="">
            Get protected
            <span className="b-btn-ic" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M6 4h6v6" /></svg>
            </span>
          </a>
          <a href="#faq" className="b-link">Read the FAQ</a>
        </div>
      </div>
    </section>
  );
}
