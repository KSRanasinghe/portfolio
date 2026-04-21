"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const experiences = [
  {
    company: "Dimensions-IT",
    role: "Web Developer",
    period: "2025-07 — Present",
    description:
      "Responsible for developing and optimizing frontend interfaces for production web systems. I focus on creating responsive, SEO-friendly layouts using HTML5 and CSS3, while ensuring pixel-perfect design implementation and cross-browser compatibility. Additionally, I utilize JavaScript and PHP for dynamic site functionalities and support the quality assurance process for live releases.",
    technologies: ["HTML5", "SCSS", "CSS3", "JavaScript", "PHP", "Bootstrap", "Responsive Design"],
    logo: "D",
  },
  {
    company: "Dimensions-IT",
    role: "Trainee Web Developer",
    period: "2024-12 — 2025-06",
    description:
      "Assisted in modernizing legacy web applications by rebuilding frontend layers for enhanced responsiveness and performance. Successfully converted outdated, static pages into SEO-friendly, standards-compliant interfaces while working closely with senior developers in a professional production workflow.",
    technologies: ["JavaScript", "HTML5", "CSS3", "PHP", "Bootstrap", "SEO Optimization"],
    logo: "D",
  },
]


export default function Experience() {

  return (
    <section id="experience" className="w-full py-10 md:py-20 xl:py-35 px-4 md:px-10 xl:px-4">
      <div className="xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto">
        <div className="space-y-4 mb-10 md:mb-14 text-center reveal-down">
          <p className="font-mono text-sm text-accent accent-text tracking-wider uppercase">Career Path</p>
          <h2 className="text-2xl md:text-6xl font-inter text-primary font-bold tracking-tight">Experience</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-center">
          <div className="hidden xl:flex xl:col-span-5 accent-text">
            <DotLottiePlayer
              src='/developer.json'
              autoplay
              loop
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-150"
            />
          </div>
          <div className="col-span-full xl:col-span-7 relative">
            {/* timeline line */}
            <div className="absolute top-0 bottom-0 left-6.75 w-px bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-18 group reveal-stagger">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-lg font-semibold text-muted-foreground group-hover:border-(--accent)/50 group-hover:text-accent accent-text transition-all duration-300">
                    {exp.logo}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent accent-text transition-colors">
                          {exp.role}
                        </h3>
                        <Link
                          href="https://dimensions-it.com/"
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                          target="_blank" rel="noopener noreferrer"
                        >
                          {exp.company}
                          <FaLink className="w-3 h-3"/>
                        </Link>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}