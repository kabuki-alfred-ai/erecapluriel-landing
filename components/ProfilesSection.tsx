"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Handshake, Target, LifeBuoy, Shield } from "lucide-react";
import { profiles } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Rocket,
  TrendingUp,
  Handshake,
  Target,
  LifeBuoy,
  Shield,
};

export default function ProfilesSection() {
  return (
    <section id="profils" className="py-20 lg:py-32 bg-[#F7F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C65D3B] text-sm font-semibold uppercase tracking-wider mb-4">
            Notre approche
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2A28] mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Un accompagnement sur mesure
            <br />
            <span className="text-[#2E6B75]">pour chaque étape</span>
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Quel que soit votre profil, nous avons l'expertise nécessaire pour vous accompagner vers la réussite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => {
            const IconComponent = iconMap[profile.icon];
            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#2C2A28]/5">
                  <div className="w-14 h-14 bg-[#C65D3B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C65D3B] transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-[#C65D3B] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2A28] mb-3 group-hover:text-[#C65D3B] transition-colors" style={{ fontFamily: 'var(--font-sora)' }}>
                    {profile.title}
                  </h3>
                  <p className="text-[#2C2A28]/70 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}