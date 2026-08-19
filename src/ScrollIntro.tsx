import { useEffect, useRef } from 'react';

export default function ScrollIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      const stage = stageRef.current;

      if (!section || !stage) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      stage.style.setProperty('--open-progress', progress.toString());
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <section className="scroll-intro" ref={sectionRef} aria-label="Abertura 4U Coworking">
      <div className="scroll-intro-stage" ref={stageRef}>
        <img
          className="scroll-intro-image"
          src="/assets/hero-coworking.png"
          alt=""
          aria-hidden="true"
        />
        <div className="scroll-intro-shade" aria-hidden="true" />
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
