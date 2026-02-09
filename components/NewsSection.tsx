"use client";

import { motion } from "framer-motion";
import { Calendar, Coffee, Users, ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#2E6B75] text-sm font-semibold uppercase tracking-wider mb-4">
              Nos événements clients
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2A28] mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
              Les Petits-Déj
              <br />
              <span className="text-[#C65D3B]">Clients</span>
            </h2>
            <p className="text-lg text-[#2C2A28]/70 mb-8 leading-relaxed">
              Rejoignez-nous pour nos rendez-vous mensuels autour d'un café. 
              L'occasion d'échanger sur les actualités fiscales, de partager vos 
              expériences et de créer des liens avec d'autres entrepreneurs du territoire.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-[#F7F5F3] rounded-xl">
                <div className="w-12 h-12 bg-[#C65D3B]/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#C65D3B]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2C2A28]">Prochain événement</div>
                  <div className="text-[#2C2A28]/70">Février 2026 - Inscriptions ouvertes</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F7F5F3] rounded-xl">
                <div className="w-12 h-12 bg-[#2E6B75]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#2E6B75]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2C2A28]">+200 participants</div>
                  <div className="text-[#2C2A28]/70">Entrepreneurs et dirigeants</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#F7F5F3] rounded-xl">
                <div className="w-12 h-12 bg-[#F4A261]/20 rounded-lg flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-[#F4A261]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2C2A28]">Petit-déjeuner offert</div>
                  <div className="text-[#2C2A28]/70">Dans toutes nos agences</div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C65D3B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b54d2b] transition-colors"
            >
              S'inscrire au prochain événement
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C65D3B] to-[#2E6B75] rounded-3xl opacity-10" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-24 h-24 bg-[#C65D3B] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Coffee className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 right-8 w-20 h-20 bg-[#2E6B75] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-[#F4A261] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Calendar className="w-12 h-12 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 right-1/4 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border border-[#2C2A28]/5"
              >
                <span className="text-2xl font-bold text-[#C65D3B]">+</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}