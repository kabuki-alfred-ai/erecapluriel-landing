"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { agencies } from "@/lib/data";

export default function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agences" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2E6B75] text-sm font-semibold uppercase tracking-wider mb-4">
            Notre présence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2A28] mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Toujours une agence
            <br />
            <span className="text-[#C65D3B]">près de chez vous</span>
          </h2>
          <p className="text-lg text-[#2C2A28]/70 max-w-2xl mx-auto">
            De Bordeaux à la côte atlantique, nos 20 agences vous ouvrent leurs portes.
          </p>
        </motion.div>

        {/* Map Container */}
        <div ref={ref} className="relative bg-[#F7F5F3] rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Map Background - Stylized South-West France */}
          <div className="relative aspect-[4/3] lg:aspect-[16/9] max-w-4xl mx-auto">
            {/* SVG Map */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Ocean */}
              <rect x="0" y="0" width="100" height="100" fill="#E8F4F8" rx="8" />
              
              {/* Land mass - simplified Nouvelle-Aquitaine shape */}
              <path
                d="M20 80 Q15 70 20 60 Q25 50 30 40 Q35 30 45 25 Q55 20 65 25 Q75 30 85 35 Q90 45 85 55 Q80 65 70 70 Q60 75 50 80 Q40 85 30 85 Q25 85 20 80"
                fill="#F5F0EB"
                stroke="#2E6B75"
                strokeWidth="0.5"
              />
              
              {/* Rivers */}
              <path
                d="M55 25 Q58 35 55 45 Q52 55 58 65"
                fill="none"
                stroke="#2E6B75"
                strokeWidth="0.8"
                opacity="0.6"
              />
              <path
                d="M45 25 Q42 35 48 45 Q52 55 48 65"
                fill="none"
                stroke="#2E6B75"
                strokeWidth="0.5"
                opacity="0.4"
              />
              
              {/* Coastline detail */}
              <path
                d="M20 60 Q18 55 20 50 Q22 45 20 40"
                fill="none"
                stroke="#2E6B75"
                strokeWidth="0.3"
                opacity="0.5"
              />
            </svg>

            {/* Agency Pins */}
            {agencies.map((agency, index) => (
              <motion.div
                key={agency.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute group cursor-pointer"
                style={{
                  left: `${agency.x}%`,
                  top: `${agency.y}%`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-[#C65D3B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-[#2C2A28] text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                      {agency.city}
                    </div>
                    <div className="w-2 h-2 bg-[#2C2A28] rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {agencies.map((agency, index) => (
              <span
                key={agency.id}
                className="inline-flex items-center gap-1.5 bg-[#F7F5F3] text-[#2C2A28] px-4 py-2 rounded-full text-sm hover:bg-[#C65D3B] hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-3 h-3" />
                {agency.city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}