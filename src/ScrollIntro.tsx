import { useEffect, useRef } from 'react';

export default function ScrollIntro() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const stage = stageRef.current;
      const root = document.documentElement;
      const introDistance = Math.round(Math.min(Math.max(window.innerHeight * 0.78, 520), 820));
      const introOffset = Math.min(Math.max(window.scrollY, 0), introDistance);
      const progress = introOffset / introDistance;

      root.style.setProperty('--intro-distance', `${introDistance}px`);
      root.style.setProperty('--intro-offset', `${introOffset}px`);

      if (stage) {
        stage.style.setProperty('--open-progress', progress.toString());
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      document.documentElement.style.removeProperty('--intro-distance');
      document.documentElement.style.removeProperty('--intro-offset');
    };
  }, []);

  return (
    <section className="scroll-intro" aria-label="Abertura 4U Coworking">
      <div className="scroll-intro-stage" ref={stageRef}>
        <div className="curtain curtain-left" aria-hidden="true" />
        <div className="curtain curtain-right" aria-hidden="true" />

        <div className="opening-logo" role="img" aria-label="4U Coworking">
          <span className="opening-mark" aria-hidden="true">4U</span>
          <span className="opening-word" aria-hidden="true">coworking</span>
        </div>
      </div>
    </section>
  );
}
