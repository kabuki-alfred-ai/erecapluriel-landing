"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { 
  Calculator, Users, Scale, TrendingUp, Search, Clipboard,
  Shield, AlertTriangle, Monitor, PieChart, Leaf
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Calculator, Users, Scale, TrendingUp, Search, Clipboard,
  Shield, AlertTriangle, Monitor, PieChart, Leaf
};

export default function ExpertisesSection() {
  return (
    <section id="expertises" className="py-24 bg-[#2E6B75]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nos <span className="text-[#F4A261]">12 expertises</span> métier
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Une équipe pluridisciplinaire à votre service pour répondre à tous vos besoins 
            en expertise comptable et gestion d'entreprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteData.expertises.map((expertise, index) => {
            const Icon = iconMap[expertise.icon] || Calculator;
            return (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#F4A261] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {expertise.title}
                </h3>
                <p className="text-sm text-white/70">
                  {expertise.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
