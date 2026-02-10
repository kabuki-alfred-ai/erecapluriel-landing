"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Rocket, TrendingUp, HandCoins, Briefcase, LifeBuoy, UserCog } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Rocket,
  TrendingUp,
  HandCoins,
  Briefcase,
  LifeBuoy,
  UserCog
};

export default function ProfilesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2A28] mb-4">
            Un accompagnement pour
            <span className="text-[#C65D3B]"> chaque étape</span>
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Quel que soit votre profil, nous avons des solutions adaptées pour vous accompagner 
            dans vos projets entrepreneuriaux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.profiles.map((profile, index) => {
            const Icon = iconMap[profile.icon] || Rocket;
            return (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-[#F7F5F3] rounded-2xl hover:bg-[#C65D3B] transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#C65D3B] group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-white group-hover:text-[#C65D3B] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2A28] group-hover:text-white mb-3 transition-colors">
                  {profile.title}
                </h3>
                <p className="text-[#2C2A28]/70 group-hover:text-white/90 transition-colors">
                  {profile.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
