"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  Scale,
  LineChart,
  Search,
  FileText,
  Gem,
  Heart,
  AlertTriangle,
  Monitor,
  BarChart3,
  Leaf,
} from "lucide-react";
import { expertises } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Calculator,
  Users,
  Scale,
  LineChart,
  Search,
  FileText,
  Gem,
  Heart,
  AlertTriangle,
  Monitor,
  BarChart3,
  Leaf,
};

export default function ExpertisesSection() {
  return (
    <section id="expertises" className="py-20 lg:py-32 bg-[#2E6B75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#F4A261] text-sm font-semibold uppercase tracking-wider mb-4">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Une expertise complète
            <br />
            <span className="text-[#F4A261]">à votre service</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            De la comptabilité quotidienne au conseil stratégique, nous couvrons l'ensemble de vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {expertises.map((expertise, index) => {
            const IconComponent = iconMap[expertise.icon];
            return (
              <motion.div
                key={expertise.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="group h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10">
                  <div className="w-12 h-12 bg-[#F4A261] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-[#2C2A28]" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
                    {expertise.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C65D3B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b54d2b] transition-colors shadow-lg"
          >
            Discuter de vos besoins
          </a>
        </motion.div>
      </div>
    </section>
  );
}