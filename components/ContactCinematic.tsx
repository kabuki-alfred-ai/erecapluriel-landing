"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { siteData } from "@/lib/data";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];

export default function ContactCinematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    nom: "",
    email: "",
    telephone: "",
    agence: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-[#F7F5F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2E6B75]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C65D3B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_OUT_CUBIC }}
          >
            <span className="text-[#C65D3B] text-sm uppercase tracking-widest mb-4 block">
              Contactez-nous
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2A28] mb-6">
              Parlons de <span className="text-[#2E6B75]">votre projet</span>
            </h2>
            <p className="text-xl text-[#2C2A28]/60 mb-12 leading-relaxed">
              Notre équipe vous répond sous 24h. Prenez rendez-vous dans l'agence 
              la plus proche de chez vous.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-[#C65D3B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C65D3B] transition-colors">
                  <Phone className="w-5 h-5 text-[#C65D3B] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#2C2A28]/50 mb-1">Téléphone</p>
                  <p className="text-lg font-semibold text-[#2C2A28]">{siteData.contact.phone}</p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-[#2E6B75]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2E6B75] transition-colors">
                  <Mail className="w-5 h-5 text-[#2E6B75] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#2C2A28]/50 mb-1">Email</p>
                  <p className="text-lg font-semibold text-[#2C2A28]">{siteData.contact.email}</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-[#F4A261]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C65D3B]" />
                </div>
                <div>
                  <p className="text-sm text-[#2C2A28]/50 mb-1">Siège social</p>
                  <p className="text-lg font-semibold text-[#2C2A28]">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-[#2E6B75]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#2E6B75]" />
                </div>
                <div>
                  <p className="text-sm text-[#2C2A28]/50 mb-1">Horaires</p>
                  <p className="text-[#2C2A28]">Lundi au Jeudi : 8h45-12h30 / 13h30-17h30</p>
                  <p className="text-[#2C2A28]">Vendredi : 8h45-12h45</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_CUBIC }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C2A28] mb-2">Message envoyé !</h3>
                <p className="text-[#2C2A28]/60">Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#2C2A28] mb-2">Envoyer un message</h3>
                <p className="text-[#2C2A28]/60 mb-8">Remplissez le formulaire ci-dessous</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C2A28] mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                        placeholder="Votre nom"
                        value={formState.nom}
                        onChange={(e) => setFormState({...formState, nom: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C2A28] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                        placeholder="votre@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C2A28] mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all"
                        placeholder="Votre numéro"
                        value={formState.telephone}
                        onChange={(e) => setFormState({...formState, telephone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C2A28] mb-2">
                        Agence souhaitée
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all bg-white"
                        value={formState.agence}
                        onChange={(e) => setFormState({...formState, agence: e.target.value})}
                      >
                        <option value="">Choisir une agence</option>
                        {siteData.agencies.map(agency => (
                          <option key={agency.id} value={agency.id}>{agency.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C2A28] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C65D3B] focus:ring-2 focus:ring-[#C65D3B]/20 outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-[#C65D3B] text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
