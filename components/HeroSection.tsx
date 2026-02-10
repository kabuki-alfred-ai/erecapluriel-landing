"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F7F5F3] via-white to-[#F4A261]/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C65D3B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E6B75]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C65D3B]/10 text-[#C65D3B] rounded-full text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              <span>20 agences dans le Sud-Ouest</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2A28] leading-tight"
            >
              Votre expert-comptable
              <span className="text-[#2E6B75]"> de proximité</span>
              <br />
              <span className="text-[#C65D3B]">à Bordeaux et en Aquitaine</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-[#2C2A28]/70 max-w-xl leading-relaxed"
            >
              {siteData.tagline}. Notre notion de proximité avec nos clients fait 
              partie de notre façon de concevoir un partenariat efficace. 
              Quelle que soit la taille de votre entreprise, nous mettons à votre 
              disposition des solutions sur mesure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact">
                <Button 
                  size="lg" 
                  className="bg-[#C65D3B] hover:bg-[#C65D3B]/90 text-white px-8"
                >
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#agences">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#2E6B75] text-[#2E6B75] hover:bg-[#2E6B75] hover:text-white"
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  Trouver mon agence
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-[#2C2A28]/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{siteData.contact.phone}</span>
              </div>
              <div className="text-sm text-[#2C2A28]/60">
                Lun-Jeu : 8h45-17h30 | Ven : 8h45-12h45
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#F4A261]/20"
            >
              <div className="text-4xl font-bold text-[#C65D3B] mb-2">20</div>
              <div className="text-[#2C2A28]/70">agences dans le Sud-Ouest</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#2E6B75]/20"
            >
              <div className="text-4xl font-bold text-[#2E6B75] mb-2">12</div>
              <div className="text-[#2C2A28]/70">expertises métier</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#C65D3B]/20"
            >
              <div className="text-4xl font-bold text-[#C65D3B] mb-2">6</div>
              <div className="text-[#2C2A28]/70">profils clients accompagnés</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#2E6B75]/20"
            >
              <div className="text-4xl font-bold text-[#2E6B75] mb-2">11</div>
              <div className="text-[#2C2A28]/70">secteurs d'activité</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
