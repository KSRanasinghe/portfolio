"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skills = [
  { name: "Next.js", slug: "next" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodejs" },
  { name: "TypeScript", slug: "ts" },
  { name: "JavaScript", slug: "js" },
  { name: "HTML5", slug: "html" },
  { name: "CSS3", slug: "css" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Tailwind CSS", slug: "tailwind" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgres" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Postman", slug: "postman" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
  { name: "GitHub", slug: "github" },
];

export default function Skills() {
  const scrollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollElement = scrollingRef.current;
      if (!scrollElement) return;

      const scrollWidth = scrollElement.scrollWidth / 2;

      gsap.to(scrollElement, {
        x: -scrollWidth,
        duration: 60,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-32 px-4">
      <div className="xl:max-w-5xl 2xl:max-w-7xl w-full mx-auto">
        <div className="space-y-4 mb-14 text-center">
          <p className="font-mono text-sm text-accent accent-text tracking-wider uppercase">Technical Expertise</p>
          <h2 className="text-xl md:text-6xl font-inter text-primary font-bold tracking-tight">Tech Stack</h2>
        </div>
        <div className="w-full py-6 overflow-hidden border border-border rounded-xl">
          <div ref={scrollingRef} className="flex gap-5 will-change-transform">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="group shrink-0 px-4 py-3 bg-card border border-border rounded-xl accent-text hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0 w-10 h-10">
                    <Image
                      src={`https://skillicons.dev/icons?i=${skill.slug}`}
                      alt={skill.name}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="64px"
                      priority={index < 8}
                    />
                  </div>
                  <span className="text-lg font-medium font-mono text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}