import { useCallback, useEffect, useRef, useState } from "react";

export default function useHorizontalDrag({
  sensitivity = 1.5,
  momentumMultiplier = 0.08,
  minimumVelocity = 0.3,
  friction = 0.96,
} = {}) {
  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const getClientX = useCallback((e) => {
    return e.touches ? e.touches[0].clientX : e.pageX;
  }, []);

  const handleDragStart = useCallback(
    (e) => {
      if (sliderRef.current) {
        setIsDragging(true);
        const clientX = getClientX(e);
        setStartX(clientX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
      }
    },
    [getClientX]
  );

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging || !sliderRef.current) return;
      e.preventDefault();
      const x = getClientX(e) - sliderRef.current.offsetLeft;
      const walk = (x - startX) * sensitivity;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft, sensitivity, getClientX]
  );

  const handleDragMomentum = useCallback(
    (e) => {
      if (!sliderRef.current) return;

      const distance = getClientX(e) - sliderRef.current.offsetLeft - startX;
      let initialVelocity = distance * momentumMultiplier;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef);
      }

      const animateMomentum = () => {
        if (Math.abs(initialVelocity) < minimumVelocity) {
          cancelAnimationFrame(animationFrameRef.current);
          return;
        }

        initialVelocity *= friction;
        if (sliderRef.current) {
          const newScrollLeft = sliderRef.current.scrollLeft - initialVelocity;

          if (newScrollLeft <= 0 || newScrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
            cancelAnimationFrame(animationFrameRef.current);
            return;
          }

          sliderRef.current.scrollLeft = newScrollLeft;
        }

        animationFrameRef.current = requestAnimationFrame(animateMomentum);
      };

      setIsDragging(false);
      animationFrameRef.current = requestAnimationFrame(animateMomentum);
    },
    [startX, momentumMultiplier, friction, minimumVelocity, getClientX]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const dragProps = {
    // mouse events
    onMouseDown: handleDragStart,
    onMouseMove: isDragging ? handleDragMove : undefined,
    onMouseUp: handleDragMomentum,
    onMouseLeave: handleDragEnd,

    // touch events
    onTouchStart: handleDragStart,
    onTouchMove: isDragging ? handleDragMove : undefined,
    onTouchEnd: handleDragMomentum,
  };

  return {
    sliderRef,
    isDragging,
    handleDragStart,
    dragProps,
  };
}
