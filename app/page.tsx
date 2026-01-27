import ScrollAnimationWrapper from "@/components/animations/ScrollAnimationWrapper";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {

  return (
    <ScrollAnimationWrapper>
      <main className="min-h-screen bg-background">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ScrollAnimationWrapper>
  );
}
