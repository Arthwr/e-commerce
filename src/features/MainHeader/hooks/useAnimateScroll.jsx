import { useState, useEffect, useCallback, useRef } from "react";

export default function useAnimateScroll(animationDuration = 1000) {
  const [isAnimating, setIsAnimating] = useState(false);
  const hasScrolledRef = useRef(false);
  const timeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!hasScrolledRef.current && window.scrollY > 0) {
      setIsAnimating(true);
      window.scrollTo({ top: 0 });

      if (timeoutRef.current !== null) return;

      timeoutRef.current = setTimeout(() => {
        hasScrolledRef.current = true;
        timeoutRef.current = null;
      }, animationDuration);
    }

    if (hasScrolledRef.current && window.scrollY === 0) {
      hasScrolledRef.current = false;
      setIsAnimating(false);
    }
  }, [animationDuration]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      hasScrolledRef.current = null;
    };
  }, [handleScroll]);

  return isAnimating;
}
