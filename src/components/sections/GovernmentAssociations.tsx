"use client";

import LocalImage from "@/components/ui/LocalImage";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { governmentLogos } from "@/lib/data";

export default function GovernmentAssociations() {
  return (
    <section id="associations" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Government Associations"
            title="Empanelled &"
            highlight="Approved"
            description="Registered and approved contractor with leading government bodies and public sector organizations."
          />
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          stagger={0.06}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {governmentLogos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8"
            >
              <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white p-3 transition-colors group-hover:bg-primary/5">
                <LocalImage
                  src={logo.image}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-dark/70">
                {logo.name}
              </p>
              <p className="mt-1 text-center text-xs text-dark/40">
                {logo.description}
              </p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
