"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F7F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C65D3B] text-sm font-semibold uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2A28] mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Parlons de votre projet
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C65D3B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C65D3B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2A28] mb-1">Siège social</h3>
                  <p className="text-[#2C2A28]/70">
                    10 Rue Furtado<br />
                    33800 Bordeaux
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2E6B75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2E6B75]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2A28] mb-1">Téléphone</h3>
                  <a href="tel:0556333930" className="text-[#2E6B75] hover:text-[#C65D3B] transition-colors">
                    05 56 33 39 30
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4A261]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#F4A261]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2A28] mb-1">Email</h3>
                  <a href="mailto:contact@erecapluriel.fr" className="text-[#2E6B75] hover:text-[#C65D3B] transition-colors">
                    contact@erecapluriel.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C65D3B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C65D3B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2A28] mb-1">Horaires d'ouverture</h3>
                  <div className="text-[#2C2A28]/70 space-y-1">
                    <p>Lundi - Jeudi : 9h-12h / 14h-17h</p>
                    <p>Vendredi : 9h-12h / 14h-16h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2A28] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2C2A28]/10 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C2A28] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2C2A28]/10 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C2A28] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#2C2A28]/10 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                    placeholder="Votre téléphone"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C2A28] mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2C2A28]/10 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="creation">Création d'entreprise</option>
                    <option value="comptabilite">Comptabilité & Fiscalité</option>
                    <option value="gestion">Conseil en gestion</option>
                    <option value="patrimoine">Gestion patrimoniale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2A28] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#2C2A28]/10 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C65D3B] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b54d2b] transition-colors"
              >
                <Send className="w-4 h-4" />
                Envoyer mon message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}