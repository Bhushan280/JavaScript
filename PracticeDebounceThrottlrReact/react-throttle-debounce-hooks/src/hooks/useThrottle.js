import { useState, useEffect } from "react";

export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const lastExecuted = Date.now();

    const handler = setTimeout(() => {
      if (Date.now() - lastExecuted >= delay) {
        setThrottledValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}
