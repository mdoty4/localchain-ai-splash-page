import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollReveal - Wraps any children in a fade-in + slide-up reveal
 * that triggers when the element scrolls into view.
 *
 * @param {number} delay - Delay in seconds before animation starts (default 0)
 * @param {number} duration - Animation duration in seconds (default 0.6)
 * @param {string} direction - Slide direction: 'up', 'left', 'right' (default 'up')
 * @param {number} distance - Slide distance in px (default 40)
 * @param {string} className - Additional classes for the wrapper
 * @param {React.ReactNode} children - Content to wrap
 */
export function ScrollReveal({
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  className = '',
  children,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: '-50px',
  });

  const directionVariants = {
    up: { y: distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? 'translate(0, 0)'
          : `translate(${directionVariants[direction].x || 0}px, ${directionVariants[direction].y || 0}px)`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * StaggerChildren - Applies staggered scroll-reveal to each child.
 *
 * @param {number} staggerDelay - Delay between each child animation (default 0.15)
 * @param {React.ReactNode[]} children - Children to stagger
 */
export function StaggerChildren({ staggerDelay = 0.15, children }) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <>
      {childArray.map((child, index) => (
        <ScrollReveal key={index} delay={index * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}