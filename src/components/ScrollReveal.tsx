import React, { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // Delay in ms (e.g. 100, 200)
  duration?: number; // Optional duration override in ms
  className?: string;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className = "",
  threshold = 0.05,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, reveal immediately
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to optimize memory
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it comes into view fully
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Determine standard classes
  let baseClass = "reveal";
  let activeClass = "reveal-active";

  if (animation === "slide-left") {
    baseClass = "reveal-slide-left";
    activeClass = "reveal-slide-left-active";
  } else if (animation === "slide-right") {
    baseClass = "reveal-slide-right";
    activeClass = "reveal-slide-right-active";
  }

  // Combine styles
  const style: React.CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`${baseClass} ${isVisible ? activeClass : ""} ${className}`}
    >
      {children}
    </div>
  );
};
