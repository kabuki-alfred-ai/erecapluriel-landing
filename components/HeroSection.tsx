"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/BANNER-HOME.jpg"
          alt="ERECApluriel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A28]/90 via-[#2C2A28]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-2xl">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C65D3B] text-white rounded-full text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              <span>20 agences dans le Sud-Ouest</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Votre expert-comptable
              <span className="text-[#F4A261]"> de proximité</span>
              <br />
              <span className="text-[#C65D3B]">à Bordeaux et en Aquitaine</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
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
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C65D3B] hover:bg-[#C65D3B]/90 text-white rounded-lg font-medium transition-colors"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="#agences">
                <button 
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2C2A28] rounded-lg font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Trouver mon agence
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{siteData.contact.phone}</span>
              </div>
              <div className="text-sm text-white/70">
                Lun-Jeu : 8h45-17h30 | Ven : 8h45-12h45
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-[#C65D3B] mb-2">20</div>
            <div className="text-[#2C2A28]/70 text-sm">agences</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-[#2E6B75] mb-2">12</div>
            <div className="text-[#2C2A28]/70 text-sm">expertises</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-[#C65D3B] mb-2">6</div>
            <div className="text-[#2C2A28]/70 text-sm">profils clients</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-[#2E6B75] mb-2">11</div>
            <div className="text-[#2C2A28]/70 text-sm">secteurs</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
