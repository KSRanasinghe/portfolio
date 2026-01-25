"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { LuArrowUp } from "react-icons/lu";

gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400px විතර පල්ලෙහාට ගියාම බටන් එක පෙන්නමු
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        display: "flex"
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" })
        }
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: 0,
      ease: "power4.inOut"
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      style={{ display: "none" }}
      className="fixed bottom-6 right-6 z-9999 flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-lg border border-white/10 hover:bg-zinc-800 transition-colors"
      aria-label="Scroll to top"
    >
      <LuArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;