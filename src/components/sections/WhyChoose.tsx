"use client";

import {
  ShieldCheck,
  Award,
  Layers,
  Users,
  CheckCircle2,
  Clock,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { whyChoose } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Award,
  Layers,
  Users,
  CheckCircle2,
  Clock,
  Leaf,
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding relative overflow-hidden bg-white">
      <DecorativeBackground variant="mesh" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Why Choose SEPL"
            title="Trusted by Government &"
            highlight="Industry Leaders"
          />
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          stagger={0.08}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {whyChoose.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="premium-card group p-7"
              >
                <div className="icon-ring mb-5 h-14 w-14 transition-transform group-hover:scale-105">
                  <Icon className="h-7 w-7 text-primary group-hover:text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
