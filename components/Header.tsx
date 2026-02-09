"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#profils", label: "Profils" },
  { href: "#agences", label: "Agences" },
  { href: "#expertises", label: "Expertises" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F3]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#C65D3B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-[#2C2A28]" style={{ fontFamily: 'var(--font-sora)' }}>
              ERECA<span className="text-[#C65D3B]">pluriel</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#2C2A28] hover:text-[#C65D3B] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0556333930"
              className="flex items-center gap-2 text-[#2E6B75] hover:text-[#C65D3B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">05 56 33 39 30</span>
            </a>
            <a
              href="#contact"
              className="bg-[#C65D3B] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#b54d2b] transition-colors"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#2C2A28]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#F7F5F3] border-t border-[#2C2A28]/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#2C2A28] hover:text-[#C65D3B] transition-colors py-2 text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#2C2A28]/10 space-y-3">
              <a
                href="tel:0556333930"
                className="flex items-center gap-2 text-[#2E6B75]"
              >
                <Phone className="w-4 h-4" />
                <span>05 56 33 39 30</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-[#C65D3B] text-white px-5 py-3 rounded-full text-center font-medium"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}