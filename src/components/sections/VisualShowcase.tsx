"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const showcaseLabels = [
  "Street Lighting",
  "Solar Power",
  "Water Projects",
  "Government Works",
];

export default function VisualShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".showcase-photo",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="section-padding relative overflow-hidden bg-white"
    >
      <DecorativeBackground variant="mesh" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Field Operations"
            title="Real Projects."
            highlight="Real Impact."
            description="From solar installations to street lighting and rural infrastructure — see the work our teams deliver across Maharashtra."
          />
        </AnimatedSection>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection animation="slide-right">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/15">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video w-full object-cover"
                poster={images.hero}
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-solar-panel-installation-on-a-roof-4374-large.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between p-6">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Play className="h-4 w-4 fill-current" />
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      On-Site Footage
                    </span>
                  </div>
                  <p className="font-heading text-xl font-bold text-white">
                    Solar & Electrical Infrastructure
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4">
            {images.showcase.map((src, i) => (
              <AnimatedSection
                key={src}
                animation="fade-up"
                delay={i * 0.08}
                className="showcase-photo"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={src}
                    alt={showcaseLabels[i]}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <p className="absolute right-3 bottom-3 left-3 text-sm font-semibold text-white">
                    {showcaseLabels[i]}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
