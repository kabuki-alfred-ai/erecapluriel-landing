"use client";

import { siteData } from "@/lib/data";
import { MapPin, Phone, Mail, Linkedin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C2A28] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#C65D3B]">ERECA</span>
              <span className="text-[#F4A261]">pluriel</span>
            </h3>
            <p className="text-white/60 mb-4 max-w-md">
              {siteData.tagline}. Notre notion de proximité avec nos clients 
              fait partie de notre façon de concevoir un partenariat efficace.
            </p>
            <div className="flex gap-4">
              <Link 
                href={siteData.contact.social.linkedin}
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C65D3B] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href={siteData.contact.social.facebook}
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C65D3B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href={siteData.contact.social.youtube}
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C65D3B] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-[#F4A261] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#expertises" className="text-white/60 hover:text-[#F4A261] transition-colors">
                  Nos expertises
                </Link>
              </li>
              <li>
                <Link href="#agences" className="text-white/60 hover:text-[#F4A261] transition-colors">
                  Nos agences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-[#F4A261] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`}>
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${siteData.contact.email}`}>
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ERECApluriel. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
