import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Flavors } from "@/components/Flavors";
import { Marquee } from "@/components/Marquee";
import { Concept } from "@/components/Concept";
import { Pros } from "@/components/Pros";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Flavors />
        <Marquee />
        <Concept />
        <Pros />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
