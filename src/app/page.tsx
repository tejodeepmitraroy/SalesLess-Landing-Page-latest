import NavBar from "@/components/Layout/NavBar";
import AboutSection from "@/components/Pages/Home/AboutSection";
import HeroSection from "@/components/Pages/Home/HeroSection";
import Footer from "@/components/Layout/Footer";

import Faq from "@/components/Pages/Home/Faq";
import HowItWorks from "@/components/Pages/Home/HowItWorks";

export default function Home() {
  return (
    <section>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <HowItWorks />
      <Faq />
      <Footer />
    </section>
  );
}
