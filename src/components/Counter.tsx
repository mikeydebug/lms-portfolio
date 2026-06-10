import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  suffix?: string;
}

export function Counter({ value, direction = 'up', className = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useSpring(direction === 'down' ? value : 0, {
    damping: 50,
    stiffness: 100,
  });

  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(direction === 'down' ? 0 : value);
      setHasAnimated(true);
    }
  }, [isInView, motionValue, direction, value, hasAnimated]);

  return (
    <span className={`inline-flex items-center ${className}`} ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
