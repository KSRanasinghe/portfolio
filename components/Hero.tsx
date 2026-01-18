"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center pt-20 px-4">
      <div className="xl:max-w-5xl 2xl:max-w-7xl w-full mx-auto">
        <div className="grid xl:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-(--accent) tracking-wider mb-0 uppercase">Web Developer</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Keshara Ranasinghe</h1>
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-(--muted-foreground) via-(--foreground) to-(--muted-foreground) leading-relaxed">
                Transforming complex requirements into seamless, high-performance web interfaces.
              </p>
            </div>
            <p className="text-(--muted-foreground) text-xl leading-relaxed">I&apos;m a Web Developer with a year of industry experience in building end-to-end solutions. I bridge the gap between clean, intuitive design and functional backend logic, ensuring every line of code is optimized for performance. Currently evolving my craft within the modern JavaScript ecosystem and looking for my next challenge as an Associate Software Engineer.</p>
            <div className="flex items-center gap-6">
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-(--foreground) text-(--background) font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
              </Link>
              <Link
                href="#experience"
                className="px-8 py-4 border border-(--primary)/40 text-(--foreground) font-medium rounded-lg hover:bg-(--secondary)/50 transition-all duration-300"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}