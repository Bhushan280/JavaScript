import { useState, useEffect, useRef } from "react";

export function useThrottleOrDebounce(value, delay = 500, mode = "throttle") {
  const [result, setResult] = useState(value);
  const lastExecuted = useRef(Date.now());
  const timer = useRef(null);

  useEffect(() => {
    if (mode === "throttle") {
      const now = Date.now();
      if (now - lastExecuted.current >= delay) {
        setResult(value);
        lastExecuted.current = now;
      }
    } else if (mode === "debounce") {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setResult(value);
      }, delay);
    }

    return () => {
      if (mode === "debounce") clearTimeout(timer.current);
    };
  }, [value, delay, mode]);

  return result;
}
