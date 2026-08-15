"use client";

import Image from "next/image";
import {
  Zap,
  Sun,
  Building2,
  Home,
  Lightbulb,
  TowerControl,
  Wifi,
  Factory,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { images } from "@/lib/images";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Sun,
  Building2,
  Home,
  Lightbulb,
  TowerControl,
  Wifi,
  Factory,
};

export default function Services() {
  return (
    <section id="services" className="services-bg relative overflow-hidden">
      <Image
        src={images.gallery.streetLights}
        alt=""
        fill
        className="services-bg-image object-cover"
        aria-hidden
      />
      <div className="grid-pattern absolute inset-0 opacity-30" aria-hidden />

      <div className="section-padding relative mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Electrical"
            highlight="Solutions"
            description="End-to-end engineering services for government, industrial, and rural infrastructure projects."
            light
          />
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          stagger={0.08}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-7 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/12"
              >
                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/10 transition-transform duration-500 group-hover:scale-[2.5]" />
                <div className="relative">
                  <div className="icon-ring mb-5 h-12 w-12">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <ArrowUpRight className="mt-4 h-5 w-5 text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
