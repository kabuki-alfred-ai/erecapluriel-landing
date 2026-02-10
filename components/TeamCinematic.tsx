"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, MapPin } from "lucide-react";
import Image from "next/image";

const EASE_OUT_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

const teamMembers = [
  {
    name: "Thomas Niclosse",
    role: "Expert-comptable associé",
    agency: "Bordeaux",
    image: "/images/Thomas-Niclosse_photo.jpg",
    quote: "Participer à l'aventure entrepreneuriale de nos clients vers le chemin du succès."
  },
  {
    name: "Nicolas & Elodie",
    role: "Associés",
    agency: "Bordeaux",
    image: "/images/Nicolas-Elodie.jpg",
    quote: "L'accompagnement personnalisé est au cœur de notre métier."
  }
];

export default function TeamCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#F7F5F3] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C65D3B]/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_CUBIC }}
          className="text-center mb-20"
        >
          <span className="text-[#C65D3B] text-sm uppercase tracking-widest mb-4 block">
            Notre Équipe
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2A28] mb-6">
            Les visages de <span className="text-[#2E6B75]">l'expertise</span>
          </h2>
          <p className="text-xl text-[#2C2A28]/60 max-w-2xl mx-auto">
            Plus de 50 collaborateurs passionnés, répartis sur 20 agences, 
            pour vous accompagner avec proximité et excellence.
          </p>
        </motion.div>

        {/* Team Grid - Cinematic Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.2 + index * 0.2,
                duration: 0.8,
                ease: EASE_OUT_CUBIC
              }}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                    <MapPin className="w-3 h-3 text-[#C65D3B]" />
                    <span className="text-[#2C2A28]">{member.agency}</span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="p-6 bg-white">
                  <Quote className="w-8 h-8 text-[#C65D3B]/20 mb-3" />
                  <p className="text-[#2C2A28]/80 text-lg leading-relaxed italic">
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Team Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C65D3B] to-[#2E6B75] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-[#2C2A28]/60">
              Et <span className="font-semibold text-[#2C2A28]">50+ collaborateurs</span> à travers le Sud-Ouest
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
