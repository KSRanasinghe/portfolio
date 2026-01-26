"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/60 backdrop-blur-xl border-b border-border/60 " : "bg-transparent border-border/60"
        }`}
    >
      <div className="xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-10 xl:px-4 py-4 flex items-center justify-between font-inter">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold hover:text-accent accent-text transition-colors"
        >
          KR
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-foreground/90 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
