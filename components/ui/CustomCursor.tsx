"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverSpecial, setIsOverSpecial] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);
    const handleSpecialEnter = () => setIsOverSpecial(true);
    const handleSpecialLeave = () => setIsOverSpecial(false);

    window.addEventListener("mousemove", moveMouse);

    const targets = document.querySelectorAll("a, button, .hover-target");
    const specialElements = document.querySelectorAll("img, .accent-text");

    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleHoverStart);
      t.addEventListener("mouseleave", handleHoverEnd);
    });

    specialElements.forEach((el) => {
      el.addEventListener("mouseenter", handleSpecialEnter);
      el.addEventListener("mouseleave", handleSpecialLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleHoverStart);
        t.removeEventListener("mouseleave", handleHoverEnd);
      });
      specialElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleSpecialEnter);
        el.removeEventListener("mouseleave", handleSpecialLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-999999 ${
        isOverSpecial ? "" : "mix-blend-difference"
      }`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -10,
        top: -10,
        backgroundColor: "white",
      }}
      animate={{
        scale: isHovered ? 3 : 1,
        opacity: isOverSpecial ? 0.4 : 1,
      }}
    />
  );
};

export default CustomCursor;