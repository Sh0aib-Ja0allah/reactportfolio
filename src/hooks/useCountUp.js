import { useEffect, useRef, useState } from 'react';

const DEFAULT_DURATION = 1500;

/* Fast out of the gate, settling gently on the final figure. */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counts from `start` up to `end` the first time the returned ref enters the
 * viewport, then stops observing. Runs once per mount — scrolling back past a
 * figure that has already counted leaves it at its final value.
 *
 * Falls back to rendering `end` immediately when IntersectionObserver is
 * unavailable or the visitor has asked for reduced motion.
 *
 * @returns {[React.RefObject, number]} ref to attach, and the current value
 */
export default function useCountUp(end, options = {}) {
  const { duration = DEFAULT_DURATION, start = 0, delay = 0 } = options;

  const ref = useRef(null);
  const hasRun = useRef(false);
  const [value, setValue] = useState(start);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setValue(end);
      return undefined;
    }

    let frameId;
    let timeoutId;

    const animate = () => {
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setValue(start + (end - start) * easeOutCubic(progress));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          observer.disconnect();
          timeoutId = window.setTimeout(animate, delay);
        });
      },
      /* Half the figure on screen — enough that it is genuinely being read,
         not counting away just off the bottom edge. */
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [end, duration, start, delay]);

  return [ref, value];
}
