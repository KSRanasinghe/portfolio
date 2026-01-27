"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; id:string; label: string; }[];
  activeSection: string;
}

const MobileMenu = ({ isOpen, onClose, navLinks, activeSection }: MobileMenuProps) => {
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Sidebar openning Animation
      gsap.to(backdropRef.current, { opacity: 1, display: "block", duration: 0.3 });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      // Sidebar closing Animation
      gsap.to(sidebarRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
      gsap.to(backdropRef.current, { opacity: 0, display: "none", duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-background/60 backdrop-blur-sm z-100 hidden opacity-0"
      />

      {/* 2. Actual Sidebar Content */}
      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 bottom-0 w-[75%] bg-background border-l border-border z-101 p-6 flex flex-col translate-x-full"
      >
        {/* Close Button */}
        <button onClick={onClose} className="self-end p-2 text-2xl text-foreground">
          <IoClose />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-lg transition-colors ${activeSection === link.id
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button in Sidebar */}
          <Link
            href="#contact"
            onClick={onClose}
            className="mt-4 px-4 py-3 bg-primary text-primary-foreground text-center rounded-lg font-medium text-lg"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;