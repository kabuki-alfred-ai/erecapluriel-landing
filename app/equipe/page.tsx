import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Thomas Niclosse",
    role: "Expert-comptable associé",
    agency: "Bordeaux",
    image: "/images/Thomas-Niclosse_photo.jpg",
    description: "Expert-comptable et Commissaire aux comptes, Thomas participe à l'aventure entrepreneuriale des clients vers le chemin du succès."
  },
  {
    name: "Nicolas & Elodie",
    role: "Associés",
    agency: "Bordeaux",
    image: "/images/Nicolas-Elodie.jpg",
    description: "Associés au cabinet, ils mettent leur expertise au service des entreprises du Sud-Ouest."
  }
];

export default function EquipePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-[#2E6B75]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre équipe
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Des professionnels qualifiés à votre service pour vous accompagner 
              dans tous vos projets.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-[#F7F5F3] rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[#2C2A28] mb-1">
                      {member.name}
                    </h2>
                    <p className="text-[#C65D3B] font-medium mb-1">{member.role}</p>
                    <p className="text-[#2C2A28]/60 mb-4">
                      Agence {member.agency}
                    </p>
                    <p className="text-[#2C2A28]/70">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-[#2C2A28]/70 mb-4">
                Et plus de 50 collaborateurs répartis sur nos 20 agences
              </p>
              <p className="text-[#2C2A28]/60">
                Experts-comptables, commissaires aux comptes, juristes, consultants RH...<br />
                Une équipe pluridisciplinaire à votre service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
