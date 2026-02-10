import HeaderCinematic from "@/components/HeaderCinematic";
import HeroCinematic from "@/components/HeroCinematic";
import StoryCinematic from "@/components/StoryCinematic";
import ExpertisesCinematic from "@/components/ExpertisesCinematic";
import TeamCinematic from "@/components/TeamCinematic";
import AgencesCinematic from "@/components/AgencesCinematic";
import ContactCinematic from "@/components/ContactCinematic";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderCinematic />
      <HeroCinematic />
      <StoryCinematic />
      <ExpertisesCinematic />
      <TeamCinematic />
      <AgencesCinematic />
      <ContactCinematic />
      <Footer />
    </main>
  );
}
