import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProfilesSection from "@/components/ProfilesSection";
import MapSection from "@/components/MapSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProfilesSection />
      <MapSection />
      <ExpertisesSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}