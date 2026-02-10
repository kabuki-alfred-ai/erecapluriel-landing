"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2A28] mb-4">
            Notre <span className="text-[#C65D3B]">équipe</span> d'experts
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Des professionnels qualifiés à votre service pour vous accompagner 
            dans tous vos projets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F7F5F3] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2A28] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C65D3B] font-medium mb-1">{member.role}</p>
                <p className="text-[#2C2A28]/60 text-sm mb-4">
                  Agence {member.agency}
                </p>
                <p className="text-[#2C2A28]/70 italic">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#2C2A28]/70">
            Et plus de 50 collaborateurs répartis sur nos 20 agences dans le Sud-Ouest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
