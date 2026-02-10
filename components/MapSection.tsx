"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function MapSection() {
  const mainAgencies = siteData.agencies.slice(0, 5); // Les 5 principales avec détails

  return (
    <section id="agences" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2A28] mb-4">
            <span className="text-[#2E6B75]">20 agences</span> à votre service
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Du Médoc à La Rochelle, en passant par Bordeaux et le Bassin d'Arcachon, 
            trouvez l'agence ERECApluriel la plus proche de chez vous.
          </p>
        </motion.div>

        {/* Main Agencies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainAgencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F7F5F3] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[#2E6B75] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2A28]">{agency.name}</h3>
                  <p className="text-sm text-[#2C2A28]/70">{agency.city}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-[#2C2A28]/70">
                  <MapPin className="w-4 h-4 text-[#C65D3B]" />
                  <span>{agency.address}</span>
                </div>
                
                <div className="flex items-center gap-2 text-[#2C2A28]/70">
                  <Phone className="w-4 h-4 text-[#C65D3B]" />
                  <a href={`tel:${agency.phone?.replace(/\s/g, '')}`} className="hover:text-[#C65D3B]">
                    {agency.phone}
                  </a>
                </div>
                
                {agency.email && (
                  <div className="flex items-center gap-2 text-[#2C2A28]/70">
                    <Mail className="w-4 h-4 text-[#C65D3B]" />
                    <a href={`mailto:${agency.email}`} className="hover:text-[#C65D3B]">
                      {agency.email}
                    </a>
                  </div>
                )}
                
                {agency.hours && (
                  <div className="flex items-start gap-2 text-[#2C2A28]/70">
                    <Clock className="w-4 h-4 text-[#C65D3B] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">{agency.hours}</span>
                  </div>
                )}
              </div>

              {agency.mapUrl && (
                <Link 
                  href={agency.mapUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[#2E6B75] text-sm mt-4 hover:underline"
                >
                  Voir sur Google Maps
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Agencies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F7F5F3] rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-[#2C2A28] mb-6 text-center">
            Nos autres agences
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {siteData.agencies.slice(5).map((agency) => (
              <div 
                key={agency.id}
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-[#C65D3B]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-4 h-4 text-[#C65D3B]" />
                </div>
                <div className="font-medium text-[#2C2A28] text-sm">{agency.name}</div>
                <div className="text-xs text-[#2C2A28]/60">{agency.city}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
