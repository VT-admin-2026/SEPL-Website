"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import Counter from "@/components/ui/Counter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

const statIcons = [Calendar, MapPin, Users];

export default function Statistics() {
  return (
    <section id="statistics" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-dark" />
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="mesh-blob mesh-blob-1 !opacity-30" />
      <div className="mesh-blob mesh-blob-2 !opacity-25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Our Impact"
            title="Proven"
            highlight="Results"
            light
          />
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={stat.label}
                className="glass-stat rounded-2xl p-6 text-center md:p-8"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="[&_div]:text-white [&_p]:text-white/60"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
