"use client";

import { Users, Wrench, HardHat, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ourTeam } from "@/lib/data";

const icons = [Users, Wrench, HardHat, Zap];

export default function OurTeam() {
  return (
    <section id="our-team" className="section-padding bg-light">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Our Team
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            One Big Happy <span className="text-gradient">Family</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection animation="slide-right">
            <p className="text-lg leading-relaxed text-dark/70">{ourTeam.intro}</p>
            <p className="mt-4 leading-relaxed text-dark/60">{ourTeam.description}</p>
            <div className="mt-8 rounded-2xl border-l-4 border-accent bg-white p-6 shadow-sm">
              <p className="font-heading text-lg font-semibold text-primary">
                &ldquo;Each member is a key to our success&rdquo;
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" stagger={0.1} className="grid gap-4 sm:grid-cols-2">
            {ourTeam.highlights.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-heading text-sm font-bold text-dark">{item}</p>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
