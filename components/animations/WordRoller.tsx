"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface WordRollerProps {
  items: string[];
  interval?: number;
}

export default function WordRoller({ items, interval = 5000 }: WordRollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex((prev) => (prev + 1) % items.length);
      }
    });

    gsap.set(chars, { y: -30, opacity: 0 });
    gsap.set(containerRef.current, { y: 0, opacity: 1 });

    tl.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.07,
      ease: "back.out(2)",
    })

      .to({}, { duration: interval / 1000 })
      
      .to(containerRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      });

    return () => {
      tl.kill();
    };
  }, [index, items, interval]);

  return (
    <div className="relative h-[1.5em] overflow-hidden">
      <div ref={containerRef} className="flex">
        {items[index].split("").map((char, i) => (
          <span
            key={`${index}-${i}`}
            className="char inline-block whitespace-pre"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}