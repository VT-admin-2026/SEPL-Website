"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown, Calendar, MapPin, Users } from "lucide-react";
import RippleButton from "@/components/ui/RippleButton";
import Counter from "@/components/ui/Counter";
import { heroStats } from "@/lib/data";
import { images } from "@/lib/images";

const statIcons = [Calendar, MapPin, Users];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".hero-stat",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 1 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="SEPL solar and electrical infrastructure project"
          fill
          priority
          className="hero-bg-image object-cover"
          sizes="100vw"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
          poster={images.hero}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-power-lines-in-a-forest-4265-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-line mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-widest text-white/90 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Since 2013 · Government Contractor
          </div>

          <h1 className="font-heading text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="hero-line block">Engineering Tomorrow,</span>
            <span className="hero-line block bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              Powering Rural India.
            </span>
          </h1>

          <p className="hero-line mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Delivering reliable electrical infrastructure, renewable energy solutions,
            turnkey government projects and innovative engineering since 2013.
          </p>

          <div className="hero-line mt-10 flex flex-wrap gap-4">
            <RippleButton href="#projects" className="btn-primary">
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </RippleButton>
            <RippleButton href="#contact" className="btn-outline">
              Contact Us
            </RippleButton>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {heroStats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="hero-stat glass-stat rounded-2xl p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                  <Icon className="h-5 w-5 text-accent" />
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

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
