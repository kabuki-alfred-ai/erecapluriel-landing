"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const news = [
  {
    date: "Septembre 2023",
    title: "Le Groupe CAEC rejoint ERECApluriel",
    excerpt: "Le Groupe CAEC a officiellement rejoint le Groupe ERECApluriel, adoptant ainsi son nom et ses couleurs. Ce changement marque une nouvelle étape dans notre développement.",
    tag: "Actualité"
  },
  {
    date: "2024",
    title: "Facture électronique",
    excerpt: "ERECApluriel vous accompagne dans la transition vers la facturation électronique obligatoire pour toutes les entreprises.",
    tag: "Expertise"
  },
  {
    date: "2024",
    title: "Spécialisation Médoc",
    excerpt: "Notre agence de Pauillac se spécialise en bénéfice agricole pour accompagner les viticulteurs et agriculteurs du Médoc.",
    tag: "Agence"
  }
];

export default function NewsSection() {
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
            Nos <span className="text-[#2E6B75]">actualités</span>
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Restez informés des dernières nouvelles du groupe ERECApluriel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F7F5F3] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#C65D3B] mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#2E6B75]/10 text-[#2E6B75] text-xs rounded-full mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold text-[#2C2A28] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#2C2A28]/70 text-sm mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href="#"
                  className="inline-flex items-center text-[#C65D3B] text-sm font-medium hover:underline"
                >
                  Lire la suite
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
