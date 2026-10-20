import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoHighlights from "@/components/BentoHighlights";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutEducation from "@/components/AboutEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D17] text-gray-100 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
      <BentoHighlights />
      <Projects />
      <Skills />
      <AboutEducation />
      <Contact />
      <Footer />
    </main>
  );
}
