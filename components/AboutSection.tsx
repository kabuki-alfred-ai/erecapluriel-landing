"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#F7F5F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2A28] mb-6">
              Un cabinet comptable et de gestion 
              <span className="text-[#C65D3B]"> proche de ses clients</span>
            </h2>
            <div className="space-y-4 text-[#2C2A28]/70 leading-relaxed">
              {siteData.introText.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#2C2A28] mb-6">
              Le métier d'expert-comptable
            </h3>
            <p className="text-[#2C2A28]/70 mb-6">
              On a encore trop souvent tendance à réduire ses prérogatives aux opérations 
              comptables traditionnelles. Mais les métiers de la comptabilité se sont 
              largement diversifiés : gestion de patrimoine, choix du régime de retraite, 
              aide à la création ou transmission d'entreprise.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C65D3B]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#C65D3B] font-bold">Bac+3</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2A28]">DCG</p>
                  <p className="text-sm text-[#2C2A28]/60">Diplôme de Comptabilité et Gestion</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2E6B75]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#2E6B75] font-bold">Bac+5</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2A28]">DSCG</p>
                  <p className="text-sm text-[#2C2A28]/60">Diplôme Supérieur de Comptabilité et Gestion</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F4A261]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#C65D3B] font-bold">Bac+8</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2A28]">DEC</p>
                  <p className="text-sm text-[#2C2A28]/60">Diplôme d'Expertise Comptable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
