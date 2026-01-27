import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const socialLinks = [
  { href: "https://github.com/KSRanasinghe", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/keshara-ranasinghe-20m08/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:kesharashakthi71@gmail.com", icon: LuMail, label: "Email" },
]

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Designed & Built by Keshara Ransinghe</p>
            <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}