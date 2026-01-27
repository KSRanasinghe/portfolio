"use client";

import { ContactFormData, sendEmail } from "@/lib/email-service";
import { useState } from "react";
import { LuCalendar, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "", });
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill in all fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    const promise = sendEmail(formData);

    toast.promise(promise, {
      loading: 'Sending your message...',
      success: () => {
        setFormData({ name: '', email: '', message: '' });
        return 'Message sent successfully! I will get back to you soon.';
      },
      error: 'Failed to send message. Please try again later.',
    });

    promise.finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-10 md:py-20 xl:py-35 px-4 md:px-10 xl:px-4 bg-card/30">
      <div className="xl:max-w-5xl 2xl:max-w-7xl w-full mx-auto">
        <div className="space-y-4 mb-16 text-center reveal-down">
          <p className="font-mono text-sm text-accent accent-text tracking-wider uppercase">Get in Touch</p>
          <h2 className="text-2xl md:text-6xl font-inter text-primary font-bold tracking-tight mb-5">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed tracking-normal max-w-xl mx-auto">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <div className="space-y-8 reveal-stagger">
              <div className="flex items-center gap-4 group">
                <div className="p-3 border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <LuMail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:kesharashakthi71@gmail.com" className="text-foreground font-medium accent-text hover:text-accent transition-colors duration-300">kesharashakthi71@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <LuMapPin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Gampaha, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <LuCalendar className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Availability</p>
                  <p className="text-foreground font-medium">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 md:space-y-6 reveal-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 accent-text">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 pt-6 pb-2 bg-card border border-border rounded-lg text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                  placeholder="Name"
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "name" || formData.name ? "top-2 text-xs text-accent" : "top-4 text-muted-foreground"
                    }`}
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full px-4 pt-6 pb-2 bg-card border border-border rounded-lg text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "email" || formData.email ? "top-2 text-xs text-accent" : "top-4 text-muted-foreground"
                    }`}
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="peer w-full px-4 pt-6 pb-2 bg-card border border-border rounded-lg text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Message"
                required
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "message" || formData.message
                  ? "top-2 text-xs text-accent"
                  : "top-4 text-muted-foreground"
                  }`}
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}

              {!isSending && (
                <LuSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}