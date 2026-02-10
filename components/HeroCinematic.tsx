"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Animation constants - Emma's signature
const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];
const STAGGER_DELAY = 0.1;

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER_DELAY,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT_CUBIC }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 0.8 + i * 0.15,
        duration: 0.6,
        ease: EASE_OUT_CUBIC
      }
    })
  };

  const stats = [
    { number: "20", label: "agences", color: "text-[#C65D3B]" },
    { number: "12", label: "expertises", color: "text-[#2E6B75]" },
    { number: "6", label: "profils clients", color: "text-[#C65D3B]" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2C2A28]"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient mesh for Territoire Vivant */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C65D3B]/20 via-[#2E6B75]/30 to-[#2C2A28]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A28] via-transparent to-transparent" />
        
        {/* Organic shapes - representing terroir */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C65D3B]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#2E6B75]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Content with parallax fade */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32"
        style={{ y: textY, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge - establishing location/emotion */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#F4A261] text-sm">
              <MapPin className="w-4 h-4" />
              Expert-comptable dans tout le Sud-Ouest
            </span>
          </motion.div>

          {/* Main Title - Cinematic reveal */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8"
          >
            <span className="block">Votre expertise</span>
            <span className="block mt-2">
              <span className="text-[#C65D3B]">comptable</span>
            </span>
            <span className="block mt-2 text-[#F4A261]">de proximité</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            20 agences dans le Sud-Ouest pour accompagner votre entreprise 
            avec la chaleur du terroir et la rigueur de l'excellence.
          </motion.p>

          {/* CTA Buttons - with impact */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link href="#contact">
              <motion.button 
                className="group px-8 py-4 bg-[#C65D3B] text-white rounded-full font-medium text-lg inline-flex items-center gap-3"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(198, 93, 59, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#agences">
              <motion.button 
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Trouver mon agence
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats - Staggered reveal */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="text-center"
              >
                <div className={`text-5xl sm:text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Cinematic */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
