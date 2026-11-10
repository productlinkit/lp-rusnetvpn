export default function PageChrome() {
  return (
    <>
      {/* first in the tab order, hidden until it has focus: 2.4.1 Bypass Blocks */}
      <a href="#top" className="skip">
        Skip to main content
      </a>
      {/* polite live region shared by the whole page. Filtering a list, switching a
              plan or finishing a form all write here, so state changes that are obvious
              on screen are also spoken. Kept empty at rest so nothing is announced twice. */}
      <p className="sr-only" id="live-polite" role="status" aria-live="polite" aria-atomic="true" />
      {/* and its assertive twin, for things that interrupt: a failed submit */}
      <p className="sr-only" id="live-alert" role="alert" aria-live="assertive" aria-atomic="true" />
      <div id="prog" />
    </>
  );
}
