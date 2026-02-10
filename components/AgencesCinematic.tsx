"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { siteData } from "@/lib/data";

const EASE_OUT_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AgencesCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainAgencies = siteData.agencies.slice(0, 5);
  const otherAgencies = siteData.agencies.slice(5);

  return (
    <section id="agences" ref={ref} className="py-32 bg-[#2C2A28] relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C65D3B] via-[#F4A261] to-[#2E6B75]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_CUBIC }}
          className="text-center mb-20"
        >
          <span className="text-[#F4A261] text-sm uppercase tracking-widest mb-4 block">
            Notre Territoire
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-[#C65D3B]">20 agences</span> près de chez vous
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Du Médoc à La Rochelle, en passant par Bordeaux et le Bassin d'Arcachon, 
            trouvez votre agence ERECApluriel.
          </p>
        </motion.div>

        {/* Main Agencies - Featured Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainAgencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.1 + index * 0.1,
                duration: 0.6,
                ease: EASE_OUT_CUBIC
              }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full group hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Agency Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#C65D3B]/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#C65D3B]" />
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#F4A261]" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {agency.name}
                </h3>
                <p className="text-white/40 text-sm mb-6">{agency.city}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="w-4 h-4 text-[#C65D3B] flex-shrink-0" />
                    <span className="text-sm">{agency.address}</span>
                  </div>
                  
                  {agency.phone && (
                    <a 
                      href={`tel:${agency.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-white/70 hover:text-[#F4A261] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C65D3B] flex-shrink-0" />
                      <span className="text-sm">{agency.phone}</span>
                    </a>
                  )}
                  
                  {agency.email && (
                    <a 
                      href={`mailto:${agency.email}`}
                      className="flex items-center gap-3 text-white/70 hover:text-[#F4A261] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#C65D3B] flex-shrink-0" />
                      <span className="text-sm">{agency.email}</span>
                    </a>
                  )}
                  
                  {agency.hours && (
                    <div className="flex items-start gap-3 text-white/50">
                      <Clock className="w-4 h-4 text-[#C65D3B] flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{agency.hours}</span>
                    </div>
                  )}
                </div>

                {agency.specialty && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs text-[#F4A261]">{agency.specialty}</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Agencies - Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: EASE_OUT_CUBIC }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Nos autres agences
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherAgencies.map((agency, index) => (
              <motion.div
                key={agency.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                whileHover={{ y: -2 }}
              >
                <div className="w-8 h-8 bg-[#2E6B75]/30 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#2E6B75] transition-colors">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="font-medium text-white text-sm">{agency.name}</div>
                <div className="text-xs text-white/40">{agency.city}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
