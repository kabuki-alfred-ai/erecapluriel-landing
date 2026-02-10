"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "Expertises", href: "#expertises" },
  { label: "Agences", href: "#agences" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/ereca-pluriel-logo.jpg" 
              alt="ERECApluriel" 
              width={120} 
              height={57}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#2C2A28] hover:text-[#C65D3B] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:0556333930" 
              className="flex items-center gap-2 text-[#2E6B75] font-medium"
            >
              <Phone className="w-4 h-4" />
              05 56 33 39 30
            </a>
            <Link 
              href="#contact"
              className="px-4 py-2 bg-[#C65D3B] text-white rounded-lg hover:bg-[#C65D3B]/90 transition-colors"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2C2A28]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C2A28]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[#2C2A28] hover:text-[#C65D3B] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="tel:0556333930" 
                className="flex items-center gap-2 text-[#2E6B75] py-2"
              >
                <Phone className="w-4 h-4" />
                05 56 33 39 30
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
