import { useCallback, useEffect, useRef, useState } from 'react';

export default function ScrollIntro() {
  const [finished, setFinished] = useState(false);
  const introRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const openDistanceRef = useRef(360);
  const touchYRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const finishTimerRef = useRef<number | null>(null);
  const bodyStyleRef = useRef<{ overflow: string; paddingRight: string } | null>(null);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) {
      return;
    }

    if (bodyStyleRef.current) {
      document.body.style.overflow = bodyStyleRef.current.overflow;
      document.body.style.paddingRight = bodyStyleRef.current.paddingRight;
      bodyStyleRef.current = null;
    }

    finishedRef.current = true;
    progressRef.current = 1;
    introRef.current?.classList.add('is-complete');
    introRef.current?.style.setProperty('--open-progress', '1');

    finishTimerRef.current = window.setTimeout(() => setFinished(true), 180);
  }, []);

  const advanceIntro = useCallback(
    (delta: number) => {
      if (finishedRef.current || delta <= 0) {
        return;
      }

      const nextProgress = Math.min(
        progressRef.current + delta / openDistanceRef.current,
        1,
      );

      progressRef.current = nextProgress;
      introRef.current?.style.setProperty('--open-progress', nextProgress.toFixed(4));

      if (nextProgress >= 1) {
        finishIntro();
      }
    },
    [finishIntro],
  );

  useEffect(() => {
    const intro = introRef.current;

    if (!intro) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      finishIntro();
      return undefined;
    }

    const updateOpenDistance = () => {
      openDistanceRef.current = window.matchMedia('(max-width: 640px)').matches ? 220 : 360;
    };

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

    updateOpenDistance();
    intro.style.setProperty('--open-progress', '0');
    bodyStyleRef.current = {
      overflow: previousOverflow,
      paddingRight: previousPaddingRight,
    };
    document.body.style.overflow = 'hidden';

    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      advanceIntro(event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();

      const currentY = event.touches[0]?.clientY;

      if (currentY === undefined || touchYRef.current === null) {
        touchYRef.current = currentY ?? null;
        return;
      }

      const delta = touchYRef.current - currentY;
      touchYRef.current = currentY;
      advanceIntro(delta * 1.25);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = [' ', 'ArrowDown', 'PageDown', 'End'];

      if (!scrollKeys.includes(event.key)) {
        return;
      }

      event.preventDefault();
      advanceIntro(event.key === 'End' ? openDistanceRef.current : 120);
    };

    intro.addEventListener('wheel', handleWheel, { passive: false });
    intro.addEventListener('touchstart', handleTouchStart, { passive: false });
    intro.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', updateOpenDistance);

    return () => {
      intro.removeEventListener('wheel', handleWheel);
      intro.removeEventListener('touchstart', handleTouchStart);
      intro.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updateOpenDistance);

      if (bodyStyleRef.current) {
        document.body.style.overflow = bodyStyleRef.current.overflow;
        document.body.style.paddingRight = bodyStyleRef.current.paddingRight;
        bodyStyleRef.current = null;
      }

      if (finishTimerRef.current) {
        window.clearTimeout(finishTimerRef.current);
      }
    };
  }, [advanceIntro, finishIntro]);

  if (finished) {
    return null;
  }

  return (
    <section className="scroll-intro" ref={introRef} aria-label="Abertura 4U Coworking">
      <div className="scroll-intro-stage">
        <div className="curtain curtain-left" aria-hidden="true" />
        <div className="curtain curtain-right" aria-hidden="true" />

        <div className="opening-logo" role="img" aria-label="4U Coworking">
          <span className="opening-mark" aria-hidden="true">4U</span>
          <span className="opening-word" aria-hidden="true">coworking</span>
        </div>

        <button
          className="opening-scroll-cue"
          type="button"
          onClick={finishIntro}
          aria-label="Abrir site"
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
