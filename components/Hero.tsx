"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const WordRoller = dynamic(() => import('@/components/animations/WordRoller'), {
  ssr: false,
});

export default function Hero() {

  return (
    <section id="about"
      className="relative min-h-screen w-full flex items-center justify-center py-15 md:py-28 px-4 md:px-10 xl:px-4 bg-cover bg-position-[65%_center] lg:bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/hero-bg.avif)' }}>
      <div className="absolute inset-0 bg-background/50" />

      <div className="relative z-10 xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto min-h-screen flex items-center">
        {/* hero section content */}
        <div className="grid xl:grid-cols-12 gap-16 items-center w-full">
          <div className="xl:col-span-9 space-y-5 md:space-y-8 lg:px-10">
            <div className="space-y-4">
              <div className="text-sm font-mono text-accent accent-text tracking-wider uppercase mb-0">
                <WordRoller
                  items={["Web Developer", "Web Designer", "Frontend Developer", "Backend Developer", "UI/UX Enthusiast"]}
                  interval={4000}
                />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-primary text-center hero-reveal">Keshara Ranasinghe</h1>
              <p className="text-lg md:text-xl xl:text-2xl text-transparent bg-clip-text bg-linear-to-r from-muted-foreground via-foreground to-muted-foreground leading-relaxed text-center hero-reveal md:px-25 lg:px-35">
                Transforming complex requirements into seamless, high-performance web interfaces.
              </p>
            </div>
            <p className="text-foreground/80 text-[16px] md:text-xl leading-relaxed 2xl:pr-3 text-center hero-reveal">I&apos;m a Web Developer currently building end-to-end web applications with a focus on clean design, solid backend logic, and performance. I&apos;m deepening my skills in the modern JavaScript ecosystem and actively seeking my next opportunity as an Associate Software Engineer.</p>
            <div className="flex items-center justify-center gap-4 md:gap-6 hero-reveal">
              <Link
                href="#contact"
                className="group relative px-5 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
              </Link>
              <Link
                href="/Keshara_Ranasinghe.pdf"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 md:px-8 md:py-4 border border-primary/40 text-foreground font-medium rounded-lg hover:bg-secondary/50 transition-all duration-300"
              >
                View CV
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 pt-1 hero-reveal">
              <Link
                href="https://github.com/KSRanasinghe"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/keshara-ranasinghe-20m08/"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}