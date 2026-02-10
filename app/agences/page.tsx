import { siteData } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AgencesPage() {
  const mainAgencies = siteData.agencies.slice(0, 5);
  const otherAgencies = siteData.agencies.slice(5);

  return (
    <main className="pt-20">
      <section className="py-24 bg-[#C65D3B]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos 20 agences
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Du Médoc à La Rochelle, trouvez l'agence ERECApluriel la plus proche de chez vous.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2C2A28] mb-8">Agences principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mainAgencies.map((agency) => (
              <div key={agency.id} className="bg-[#F7F5F3] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#2C2A28] mb-4">{agency.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#C65D3B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#2C2A28]">{agency.address}</p>
                      <p className="text-[#2C2A28]/70">{agency.city}</p>
                    </div>
                  </div>
                  
                  {agency.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#C65D3B]" />
                      <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="text-[#2C2A28]">
                        {agency.phone}
                      </a>
                    </div>
                  )}
                  
                  {agency.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#C65D3B]" />
                      <a href={`mailto:${agency.email}`} className="text-[#2C2A28]">
                        {agency.email}
                      </a>
                    </div>
                  )}
                  
                  {agency.hours && (
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-[#C65D3B] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#2C2A28]/70">{agency.hours}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2C2A28] mb-8">Autres agences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherAgencies.map((agency) => (
              <div key={agency.id} className="bg-[#F7F5F3] rounded-lg p-4 text-center">
                <MapPin className="w-5 h-5 text-[#C65D3B] mx-auto mb-2" />
                <p className="font-medium text-[#2C2A28]">{agency.name}</p>
                <p className="text-sm text-[#2C2A28]/60">{agency.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
