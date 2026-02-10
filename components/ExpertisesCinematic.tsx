"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calculator, Users, Scale, TrendingUp, Search, Clipboard,
  Shield, AlertTriangle, Monitor, PieChart, Leaf, ArrowRight
} from "lucide-react";
import Link from "next/link";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];

const expertises = [
  {
    icon: Calculator,
    title: "Comptabilité & Fiscalité",
    description: "Tenue comptable, bilans, déclarations fiscales, optimisation fiscale",
    color: "from-[#C65D3B] to-[#F4A261]"
  },
  {
    icon: Users,
    title: "Paie & Ressources humaines",
    description: "Gestion de paie, contrats, droit social, formation",
    color: "from-[#2E6B75] to-[#4A9BA8]"
  },
  {
    icon: Scale,
    title: "Juridique des sociétés",
    description: "Constitution, modification, cession de sociétés",
    color: "from-[#C65D3B] to-[#E07A5F]"
  },
  {
    icon: TrendingUp,
    title: "Conseil en gestion",
    description: "Accompagnement stratégique, tableaux de bord",
    color: "from-[#2E6B75] to-[#3D8B99]"
  },
  {
    icon: Search,
    title: "Audit",
    description: "Commissariat aux comptes, audit légal et contractuel",
    color: "from-[#F4A261] to-[#E9C46A]"
  },
  {
    icon: Clipboard,
    title: "Services administratifs",
    description: "Externalisation administrative, secrétariat",
    color: "from-[#2E6B75] to-[#5BA8B3]"
  },
  {
    icon: Shield,
    title: "Conseil patrimonial",
    description: "Protection sociale, gestion de patrimoine, retraite",
    color: "from-[#C65D3B] to-[#D47358]"
  },
  {
    icon: AlertTriangle,
    title: "Entreprise en difficulté",
    description: "Prévention, redressement judiciaire, liquidation",
    color: "from-[#2C2A28] to-[#4A4745]"
  },
  {
    icon: Monitor,
    title: "Digitalisation",
    description: "Transition numérique, dématérialisation, outils collaboratifs",
    color: "from-[#2E6B75] to-[#6BB8C2]"
  },
  {
    icon: PieChart,
    title: "Consolidation & Reporting",
    description: "Établissements de consolidation, reporting financier",
    color: "from-[#C65D3B] to-[#E8947A]"
  },
  {
    icon: Leaf,
    title: "RSE",
    description: "Responsabilité Sociétale des Entreprises, bilan carbone",
    color: "from-[#87A878] to-[#A8C499]"
  }
];

export default function ExpertisesCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertises" ref={ref} className="py-32 bg-[#2E6B75] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2E6B75] via-[#2E6B75] to-[#265C66]" />
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_CUBIC }}
          className="text-center mb-20"
        >
          <span className="text-[#F4A261] text-sm uppercase tracking-widest mb-4 block">
            Nos Expertises
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Une équipe <span className="text-[#F4A261]">pluridisciplinaire</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            11 expertises métier pour répondre à tous vos besoins en accompagnement 
            comptable et gestion d'entreprise.
          </p>
        </motion.div>

        {/* Expertises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.1 + index * 0.08,
                  duration: 0.6,
                  ease: EASE_OUT_CUBIC
                }}
              >
                <motion.div
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full cursor-pointer hover:bg-white/20 transition-colors"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${expertise.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4A261] transition-colors">
                    {expertise.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {expertise.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#F4A261]" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/expertises">
            <motion.button
              className="px-8 py-4 bg-white text-[#2E6B75] rounded-full font-semibold inline-flex items-center gap-2"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              Voir toutes nos expertises
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
