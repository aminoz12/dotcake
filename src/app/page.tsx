import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Flavors } from "@/components/Flavors";
import { Marquee } from "@/components/Marquee";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { Pros } from "@/components/Pros";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Flavors />
        <Marquee />
        <ReviewsMarquee />
        <Pros />
        <Faq />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
