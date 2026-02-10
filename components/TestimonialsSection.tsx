"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteData.testimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#F7F5F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2A28] mb-4">
            Les mots de <span className="text-[#C65D3B]">nos experts</span>
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            Découvrez la philosophie et les valeurs qui animent notre équipe au quotidien.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative"
          >
            <Quote className="w-12 h-12 text-[#C65D3B]/20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-[#2C2A28] italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              {testimonials[currentIndex].fullQuote && (
                <p className="text-[#2C2A28]/70 mb-6 leading-relaxed">
                  {testimonials[currentIndex].fullQuote}
                </p>
              )}
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C65D3B] to-[#F4A261] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#2C2A28]">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#C65D3B] text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-[#2C2A28]/60 text-sm">
                    Agence {testimonials[currentIndex].agency}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow hover:bg-[#C65D3B] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? "bg-[#C65D3B] w-6" 
                      : "bg-[#C65D3B]/30"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow hover:bg-[#C65D3B] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
