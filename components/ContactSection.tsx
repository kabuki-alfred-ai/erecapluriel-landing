"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#2C2A28]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Contactez-nous
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Notre équipe vous répond du lundi au vendredi. 
              N'hésitez pas à nous contacter pour prendre rendez-vous 
              ou obtenir des informations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C65D3B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Siège social</h3>
                  <p className="text-white/70">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2E6B75] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                  <a href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`} className="text-white/70 hover:text-[#F4A261]">
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C65D3B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href={`mailto:${siteData.contact.email}`} className="text-white/70 hover:text-[#F4A261]">
                    {siteData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2E6B75] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Horaires d'ouverture</h3>
                  <p className="text-white/70">
                    Lundi au Jeudi : 8h45-12h30 / 13h30-17h30<br />
                    Vendredi : 8h45-12h45
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#2C2A28] mb-6">
              Envoyer un message
            </h3>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                    Prénom
                  </label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                    Nom
                  </label>
                  <Input placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Email
                </label>
                <Input type="email" placeholder="votre@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Téléphone
                </label>
                <Input placeholder="Votre numéro" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Agence souhaitée
                </label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  <option value="">Choisir une agence</option>
                  {siteData.agencies.map(agency => (
                    <option key={agency.id} value={agency.id}>
                      {agency.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Message
                </label>
                <Textarea 
                  placeholder="Décrivez votre demande..." 
                  rows={4}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#C65D3B] hover:bg-[#C65D3B]/90 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
