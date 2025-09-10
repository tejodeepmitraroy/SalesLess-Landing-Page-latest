import NavBar from "@/components/navigations/NavBar";
import AboutSection from "@/components/Pages/Home/AboutSection";
import HeroSection from "@/components/Pages/Home/HeroSection";
import Footer from "@/components/navigations/Footer";
import Faq from "@/components/Pages/Home/Faq";
import HowItWorks from "@/components/Pages/Home/HowItWorks";
import Integrations from "@/components/Pages/Home/Integrations";
import CTABanner from "@/components/Pages/Home/CTA-banner";
import Pricing from "@/components/Pages/Home/Pricing";
import Features from "@/components/Pages/Home/Features";

export default function Home() {
  return (
    <section>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Features />
      <Integrations />
      <HowItWorks />
      <Pricing />
      <Faq />
      <CTABanner />
      <Footer />
    </section>
  );
}
