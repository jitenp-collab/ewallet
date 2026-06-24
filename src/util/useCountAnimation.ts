
import { useState, useEffect } from 'react';

export const useCountAnimation = (targetValue: number, duration: number = 1500) => {
  const [display, setDisplay] = useState('$0.00');

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`$${(eased * targetValue).toFixed(2)}`);

      if (progress >= 1) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return display;
};