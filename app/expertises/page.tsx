import { siteData } from "@/lib/data";
import { Calculator, Users, Scale, TrendingUp, Search, Clipboard, Shield, AlertTriangle, Monitor, PieChart, Leaf } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Calculator, Users, Scale, TrendingUp, Search, Clipboard,
  Shield, AlertTriangle, Monitor, PieChart, Leaf
};

export default function ExpertisesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-[#2E6B75]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos expertises métier
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Une équipe pluridisciplinaire à votre service pour répondre à tous vos besoins.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.expertises.map((expertise, index) => {
              const Icon = iconMap[expertise.icon] || Calculator;
              return (
                <div key={index} className="bg-[#F7F5F3] rounded-xl p-8">
                  <div className="w-14 h-14 bg-[#2E6B75] rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-[#2C2A28] mb-3">
                    {expertise.title}
                  </h2>
                  <p className="text-[#2C2A28]/70 leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
