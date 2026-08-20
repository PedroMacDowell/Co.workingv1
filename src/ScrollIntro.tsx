import { useEffect, useState } from 'react';

export default function ScrollIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 1250);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <section className="scroll-intro" aria-hidden="true">
      <div className="scroll-intro-stage">
        <div className="opening-logo" role="img" aria-label="4U Coworking">
          <span className="opening-mark" aria-hidden="true">4U</span>
          <span className="opening-word" aria-hidden="true">coworking</span>
        </div>
      </div>
    </section>
  );
}
