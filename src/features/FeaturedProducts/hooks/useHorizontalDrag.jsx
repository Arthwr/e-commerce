import { useCallback, useEffect, useRef, useState } from "react";

export default function useHorizontalDrag({
  sensitivity = 1.5,
  momentumMultiplier = 0.08,
  minimumVelocity = 0.3,
  friction = 0.96,
  momentumTimeout = 10,
} = {}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(document.visibilityState === "visible");
  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const lastTouchXRef = useRef(0);

  const getClientX = useCallback((e) => {
    if (!e) return 0;

    const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);

    if (touch) {
      lastTouchXRef.current = touch.clientX;
      return touch.clientX;
    }

    return e.pageX || e.clientX || lastTouchXRef.current || 0;
  }, []);

  const handleDragMomentum = useCallback(
    (e) => {
      if (!sliderRef.current) return;

      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastMoveTimeRef.current;

      if (timeSinceLastMove > momentumTimeout) {
        setIsDragging(false);
        return;
      }

      const distance = getClientX(e) - sliderRef.current.offsetLeft - startXRef.current;
      const velocity = distance / (timeSinceLastMove || 1);
      let initialVelocity = velocity * momentumMultiplier;

      const animateMomentum = () => {
        if (!sliderRef.current) return;

        if (Math.abs(initialVelocity) < minimumVelocity) {
          return;
        }

        initialVelocity *= friction;

        const newScrollLeft = sliderRef.current.scrollLeft - initialVelocity;

        if (newScrollLeft <= 0 || newScrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          return;
        }

        sliderRef.current.scrollLeft = newScrollLeft;

        if (Math.abs(initialVelocity) >= minimumVelocity) {
          animationFrameRef.current = requestAnimationFrame(animateMomentum);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animateMomentum);

      setIsDragging(false);
    },
    [momentumMultiplier, friction, minimumVelocity, momentumTimeout, getClientX]
  );

  const stopMomentumAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const handleDragStart = useCallback(
    (e) => {
      stopMomentumAnimation();
      if (sliderRef.current) {
        setIsDragging(true);
        const clientX = getClientX(e);
        startXRef.current = clientX - sliderRef.current.offsetLeft;
        scrollLeftRef.current = sliderRef.current.scrollLeft;
        lastMoveTimeRef.current = Date.now();
      }
    },
    [getClientX, stopMomentumAnimation]
  );

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging || !sliderRef.current || !isVisible) return;

      if (!e.touches) e.preventDefault();

      lastMoveTimeRef.current = Date.now();
      const x = getClientX(e) - sliderRef.current.offsetLeft;
      const walk = (x - startXRef.current) * sensitivity;
      sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
    },
    [isDragging, sensitivity, getClientX, isVisible]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    return () => stopMomentumAnimation();
  }, [stopMomentumAnimation]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");

      if (document.visibilityState === "hidden") {
        stopMomentumAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopMomentumAnimation();
    };
  }, [stopMomentumAnimation]);

  const dragProps = {
    onMouseDown: handleDragStart,
    onMouseMove: isDragging ? handleDragMove : undefined,
    onMouseUp: handleDragMomentum,
    onMouseLeave: handleDragEnd,
    onTouchStart: handleDragStart,
    onTouchMove: isDragging ? handleDragMove : undefined,
    onTouchEnd: handleDragMomentum,
  };

  return { sliderRef, isDragging, dragProps };
}
