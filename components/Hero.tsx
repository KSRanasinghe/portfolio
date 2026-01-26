"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

const WordRoller = dynamic(() => import('@/components/animations/WordRoller'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="about" className="lg:min-h-screen w-full flex items-start lg:items-center justify-center pt-25 md:pt-35 px-4 md:px-10 xl:px-4">
      <div className="xl:max-w-6xl 2xl:max-w-7xl w-full mx-auto">
        <div className="grid xl:grid-cols-12 gap-16 items-center">
          <div className="xl:col-span-6 space-y-5 md:space-y-8">
            <div className="space-y-4 xl:pr-5">
              <div className="text-sm font-mono text-accent accent-text tracking-wider uppercase mb-0">
                <WordRoller
                  items={["Web Developer", "Web Designer", "Frontend Developer", "Backend Developer", "UI Enthusiast"]}
                  interval={4000}
                />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-primary text-center md:text-left">Keshara Ranasinghe</h1>
              <p className="text-lg md:text-xl xl:text-2xl text-transparent bg-clip-text bg-linear-to-r from-muted-foreground via-foreground to-muted-foreground leading-relaxed text-center md:text-left">
                Transforming complex requirements into seamless, high-performance web interfaces.
              </p>
            </div>
            <p className="text-muted-foreground text-[16px] md:text-xl leading-relaxed 2xl:pr-3 text-center md:text-left">I&apos;m a Web Developer with a year of industry experience building end-to-end solutions. I bridge clean, intuitive design with solid backend logic to deliver performance-optimized code. Currently deepening my skills in the modern JavaScript ecosystem and seeking my next challenge as an Associate Software Engineer.</p>
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
              <Link
                href="#contact"
                className="group relative px-5 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
              </Link>
              <Link
                href="#experience"
                className="px-5 py-3 md:px-8 md:py-4 border border-primary/40 text-foreground font-medium rounded-lg hover:bg-secondary/50 transition-all duration-300"
              >
                View Work
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-1">
              <Link
                href="https://github.com/KSRanasinghe"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5"/>
              </Link>
              <Link
                href="https://www.linkedin.com/in/keshara-ranasinghe-20m08/"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5"/>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex xl:col-span-6 items-center justify-center">
            <div className="relative group">

              <div className="absolute inset-0 bg-linear-to-br from-accent/30 to-blue-500/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="relative w-150 h-150 rounded-full border border-border/40 bg-linear-to-b from-secondary/80 to-card/90 shadow-2xl flex items-end justify-center overflow-hidden">

                <div className="relative w-[130%] h-[130%] -bottom-8 z-10">
                  <Image
                    src="/hero-1.avif"
                    alt="Keshara Ranasinghe"
                    fill
                    priority
                    className="object-contain object-bottom transition-transform duration-500 scale-[1.3]"
                    sizes="600px"
                  />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 xl:mt-20">
          <Link
            href="#experience"
            className="animate-bounce p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <FaArrowDown className="w-5 h-5"/>
          </Link>
        </div>
      </div>
    </section>
  );
}