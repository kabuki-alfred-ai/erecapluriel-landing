"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE_OUT_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StoryCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "De nos jours, le commerce mondial est en perpétuelle évolution et il faut parfois savoir prendre des décisions rapides pour rester compétitif ou décrocher de nouveaux marchés.",
    "C'est ici que l'aide et le conseil de son expert-comptable peut s'avérer crucial pour minimiser au maximum le risque d'erreur dans sa stratégie commerciale.",
    "La notion de proximité avec nos clients a toujours fait partie de notre façon de concevoir un partenariat efficace avec les entreprises.",
    "Quel que soit le secteur d'activité de notre clientèle — industrie, professions libérales, commerces, agriculture, transport, CHR, santé, services à la personne — quelle que soit la taille de l'entreprise : TPE, PME/PMI ou grands groupes, nous mettons à disposition de nos clients des solutions de suivi sur mesure."
  ];

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F7F5F3] to-transparent" />
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-[#C65D3B]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_OUT_CUBIC }}
            className="text-center mb-16"
          >
            <span className="text-[#C65D3B] text-sm uppercase tracking-widest mb-4 block">
              Notre Histoire
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2A28] mb-6">
              Une expertise <span className="text-[#2E6B75]">ancrée</span> dans le territoire
            </h2>
          </motion.div>

          {/* Story Text - Progressive Reveal */}
          <div className="space-y-8">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.2 + index * 0.15,
                  duration: 0.8,
                  ease: EASE_OUT_CUBIC
                }}
                className={`text-xl leading-relaxed ${
                  index === 0 ? 'text-2xl sm:text-3xl font-light text-[#2C2A28]' : 
                  'text-[#2C2A28]/70'
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: EASE_OUT_CUBIC }}
            className="mt-20 grid sm:grid-cols-3 gap-8"
          >
            {[
              { number: "20+", label: "années d'expérience", color: "text-[#C65D3B]" },
              { number: "20", label: "agences locales", color: "text-[#2E6B75]" },
              { number: "1000+", label: "entreprises accompagnées", color: "text-[#C65D3B]" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-[#2C2A28]/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
