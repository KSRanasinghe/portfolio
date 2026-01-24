import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Education/>
      <Skills/>
    </main>
  );
}
