'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Fades content up once as it scrolls into view.
 *
 * The hidden state lives in CSS (`[data-reveal]` in globals.css) rather than in
 * inline styles, so server and client markup are byte-identical and there is no
 * hydration mismatch. Reduced-motion users skip the effect via a media query,
 * and a <noscript> rule keeps everything visible without JS.
 */
export default function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('is-visible');

    if (!('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -80px 0px' },
    );

    observer.observe(el);

    // Failsafe: content must never stay invisible if the observer never fires
    // (background tab on first paint, prerendering, unusual embedding).
    const failsafe = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
