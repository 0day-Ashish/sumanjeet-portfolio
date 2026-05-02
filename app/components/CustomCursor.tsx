"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial positions
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      // Immediate follow for the tiny dot
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Delayed smooth follow for the glow/ring
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.3 });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = "none";

    // Show cursor on links
    const links = document.querySelectorAll("a, button, .group");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 1.5, backgroundColor: "#f5e6d3", duration: 0.3 });
        gsap.to(follower, { scale: 2, borderColor: "#f5e6d3", borderWidth: "1px", duration: 0.3 });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
        gsap.to(follower, { scale: 1, borderColor: "rgba(255, 255, 255, 0.3)", borderWidth: "1px", duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <>
      {/* Primary Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[9999] pointer-events-none"
      />
      {/* Smooth Follower Ring/Glow */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full z-[9998] pointer-events-none"
      />
    </>
  );
}
