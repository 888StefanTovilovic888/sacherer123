import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import LogoCarousel from "@/components/LogoCarousel";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ConsultantsSection from "@/components/ConsultantsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroCarousel />
        <WhyChooseSection />
        <LogoCarousel />
        <ServicesSection />
        <ConsultantsSection />
<ContactSection />
        <Footer />
      </div>
    </main>
  );
}
