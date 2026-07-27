import React from 'react';
import './CountUp.css';
import useCountUp from '../../hooks/useCountUp';

/**
 * A number that counts up when it scrolls into view.
 *
 * The animating digits are hidden from assistive tech — a screen reader
 * announcing every frame would be noise — and the settled value is exposed
 * once, in a visually hidden sibling.
 */
function CountUp({ end, prefix = '', suffix = '', duration, delay, className = '' }) {
  const [ref, value] = useCountUp(end, { duration, delay });

  return (
    <span ref={ref} className={`countup ${className}`.trim()}>
      <span aria-hidden="true">
        {prefix}
        {Math.round(value)}
        {suffix}
      </span>
      <span className="countup__sr">
        {prefix}
        {end}
        {suffix}
      </span>
    </span>
  );
}

export default CountUp;
