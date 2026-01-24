"use client";

import { FaGraduationCap, FaAward } from "react-icons/fa";

const education = [
  {
    institution: "IIC University of Technology, Cambodia",
    degree: "B. Eng. (Hons) in Software Engineering",
    period: "2021 — 2025",
    result: "GPA - 2.52",
    icon: FaGraduationCap,
  },
  {
    institution: "Esoft Metro Campus, Sri Lanka",
    degree: "Dip. in Information Technology (Pearson Assured)",
    period: "2019 — 2020",
    result: "Completed",
    icon: FaAward,
  },
  {
    institution: "Bandaranayake College - Gampaha, Sri Lanka",
    degree: "G.C.E. Advanced Level - Biological Science",
    period: "2017 — 2020",
    result: "2Cs & 1S",
    icon: FaAward,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 bg-card/30">
      <div className="xl:max-w-5xl 2xl:max-w-7xl w-full mx-auto">
        <div className="space-y-4 mb-14 text-center">
          <p className="font-mono text-sm text-accent accent-text tracking-wider uppercase">Academic Background</p>
          <h2 className="text-xl md:text-6xl font-inter text-primary font-bold tracking-tight">Education</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border rounded-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Icon className="w-6 h-6 text-accent accent-text" />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-accent font-medium accent-text">{edu.result}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}