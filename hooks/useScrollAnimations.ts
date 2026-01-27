"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.from(".hero-reveal", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
    });

    const headings = document.querySelectorAll(".reveal-down");
    headings.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: -50 },
        {
          opacity: 1, y: 0,
          duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse", }
        }
      );
    });

    const paragraphs = document.querySelectorAll(".reveal-up");
    paragraphs.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse", }
        }
      );
    });

    const containers = document.querySelectorAll(".reveal-stagger");
    containers.forEach((container) => {
      const children = container.children;
      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "play none none reverse", }
        }
      );
    });

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};