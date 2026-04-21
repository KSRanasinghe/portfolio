"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();

    if (isMobile) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    const targets = document.querySelectorAll("a, button, .hover-target");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleHoverStart);
      t.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleHoverStart);
        t.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-9999"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -6,
        top: -6,
        backgroundColor: "white",
      }}
      animate={{
        scale: isHovered ? 4 : 1,
        opacity: isHovered ? 0.3 : 0.8,
      }}
    />
  );
};

export default CustomCursor;