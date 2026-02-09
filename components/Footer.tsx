"use client";

import { Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2A28] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#C65D3B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>
                ERECA<span className="text-[#C65D3B]">pluriel</span>
              </span>
            </a>
            <p className="text-white/70 max-w-md mb-6">
              Votre expert-comptable dans tout le Sud-Ouest. 
              15 agences pour vous accompagner de la création à la transmission.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C65D3B] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C65D3B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C65D3B] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#profils" className="text-white/70 hover:text-[#F4A261] transition-colors">
                  Profils clients
                </a>
              </li>
              <li>
                <a href="#agences" className="text-white/70 hover:text-[#F4A261] transition-colors">
                  Nos agences
                </a>
              </li>
              <li>
                <a href="#expertises" className="text-white/70 hover:text-[#F4A261] transition-colors">
                  Expertises
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-white/70 hover:text-[#F4A261] transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#F4A261] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>10 Rue Furtado</li>
              <li>33800 Bordeaux</li>
              <li>
                <a href="tel:0556333930" className="hover:text-[#F4A261] transition-colors">
                  05 56 33 39 30
                </a>
              </li>
              <li>
                <a href="mailto:contact@erecapluriel.fr" className="hover:text-[#F4A261] transition-colors">
                  contact@erecapluriel.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} ERECApluriel. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
          <p className="text-white/50 text-sm">
            Réalisé par <span className="text-[#F4A261]">Kabuki Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}