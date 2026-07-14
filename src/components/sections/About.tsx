"use client";

import LocalImage from "@/components/ui/LocalImage";
import {
  Calendar,
  Target,
  Eye,
  Heart,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { aboutCards, aboutContent } from "@/lib/data";
import { images } from "@/lib/images";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Target,
  Eye,
  Heart,
};

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-light">
      <DecorativeBackground variant="light" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="About Us"
            title="We Care —"
            highlight="Since 2013"
            description="A trusted government contractor powering rural Maharashtra through reliable electrical infrastructure."
          />
        </AnimatedSection>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/15 ring-1 ring-primary/10">
                <LocalImage
                  src={images.about}
                  alt="SEPL solar installation project"
                  width={800}
                  height={600}
                  className="h-[400px] w-full object-cover lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
              <div className="absolute -right-4 -bottom-4 rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-4 text-white shadow-xl">
                <p className="font-heading text-3xl font-bold">12+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="font-heading text-2xl font-bold text-dark md:text-3xl">
                Suvidhinath Electronics Pvt. Ltd.
              </h3>
              <p className="mt-4 leading-relaxed text-dark/70">{aboutContent.intro}</p>
              <p className="mt-4 leading-relaxed text-dark/70">{aboutContent.growth}</p>
              <p className="mt-4 leading-relaxed text-dark/70">{aboutContent.government}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutCards.map((card) => {
                  const Icon = iconMap[card.icon];
                  return (
                    <div key={card.title} className="glass-card-dark rounded-2xl p-5">
                      <div className="icon-ring mb-3 h-10 w-10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-heading text-sm font-bold text-dark">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-dark/60">
                        {card.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
