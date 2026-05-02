"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export default function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before it comes into full view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0 blur-0" 
          : "opacity-0 translate-y-20 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}
