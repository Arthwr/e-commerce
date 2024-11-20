import { useCallback, useEffect, useRef, useState } from "react";

export default function useHorizontalDrag({
  sensitivity = 1.5,
  momentumMultiplier = 0.08,
  minimumVelocity = 0.3,
  friction = 0.96,
  momentumTimeout = 10,
} = {}) {
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const lastMoveTimeRef = useRef(0);

  const stopMomentumAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const getClientX = useCallback((e) => {
    return e.touches ? e.touches[0].clientX : e.pageX;
  }, []);

  useEffect(() => {
    return () => stopMomentumAnimation();
  }, [stopMomentumAnimation]);

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
      if (!isDragging || !sliderRef.current) return;
      e.preventDefault();

      lastMoveTimeRef.current = Date.now();

      const x = getClientX(e) - sliderRef.current.offsetLeft;
      const walk = (x - startXRef.current) * sensitivity;
      sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
    },
    [isDragging, sensitivity, getClientX]
  );

  const handleDragMomentum = useCallback(
    (e) => {
      if (!sliderRef.current) return;

      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastMoveTimeRef.current;
      const distance = getClientX(e) - sliderRef.current.offsetLeft - startXRef.current;

      const velocity = distance / (timeSinceLastMove || 1);

      if (timeSinceLastMove <= momentumTimeout) {
        let initialVelocity = velocity * momentumMultiplier;

        const animateMomentum = () => {
          if (Math.abs(initialVelocity) < minimumVelocity) {
            stopMomentumAnimation();
            return;
          }

          initialVelocity *= friction;
          if (sliderRef.current) {
            const newScrollLeft = sliderRef.current.scrollLeft - initialVelocity;

            if (newScrollLeft <= 0 || newScrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
              stopMomentumAnimation();
              return;
            }

            sliderRef.current.scrollLeft = newScrollLeft;
          }

          animationFrameRef.current = requestAnimationFrame(animateMomentum);
        };

        animationFrameRef.current = requestAnimationFrame(animateMomentum);
      }

      setIsDragging(false);
    },
    [momentumMultiplier, friction, minimumVelocity, momentumTimeout, getClientX, stopMomentumAnimation]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const dragProps = {
    onMouseDown: handleDragStart,
    onMouseMove: isDragging ? handleDragMove : undefined,
    onMouseUp: handleDragMomentum,
    onMouseLeave: handleDragEnd,

    onTouchStart: handleDragStart,
    onTouchMove: isDragging ? handleDragMove : undefined,
    onTouchEnd: handleDragMomentum,
  };

  return {
    sliderRef,
    isDragging,
    dragProps,
  };
}
