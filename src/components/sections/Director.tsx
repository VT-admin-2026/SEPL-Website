"use client";

import LocalImage from "@/components/ui/LocalImage";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { director } from "@/lib/data";

export default function Director() {
  return (
    <section id="director" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Leadership
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Meet Our <span className="text-gradient">Director</span>
          </h2>
        </AnimatedSection>

        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Image - LEFT (40%) */}
          <AnimatedSection animation="slide-right" className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-20 blur-sm transition-opacity group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary/30 shadow-2xl shadow-primary/15">
                <LocalImage
                  src={director.image}
                  alt={`${director.name} - Managing Director`}
                  width={600}
                  height={750}
                  className="h-[420px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 lg:h-[560px]"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg">
                Managing Director
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Description - RIGHT (60%) */}
          <AnimatedSection animation="slide-left" className="lg:col-span-3">
            <div className="relative">
              <span className="quote-mark absolute -top-8 -left-2 text-8xl text-primary/10 select-none">
                &ldquo;
              </span>

              <h3 className="font-heading text-3xl font-bold text-dark md:text-4xl">
                {director.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-primary">
                Managing Director
              </p>

              <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-heading text-sm font-bold tracking-widest text-dark/40 uppercase">
                    Experience
                  </h4>
                  <p className="mt-2 leading-relaxed text-dark/70">
                    {director.experience}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-bold tracking-widest text-dark/40 uppercase">
                    Leadership Philosophy
                  </h4>
                  <p className="mt-2 leading-relaxed text-dark/70">
                    {director.philosophy}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-bold tracking-widest text-dark/40 uppercase">
                    Vision Statement
                  </h4>
                  <p className="mt-2 leading-relaxed text-dark/70">
                    {director.vision}
                  </p>
                </div>

                <blockquote className="relative rounded-2xl border-l-4 border-accent bg-primary/5 p-6">
                  <span className="quote-mark absolute -top-3 left-4 text-5xl text-accent/30">
                    &ldquo;
                  </span>
                  <p className="relative z-10 pt-4 text-lg leading-relaxed font-medium text-dark/80 italic">
                    {director.quote}
                  </p>
                  <span className="quote-mark absolute right-4 -bottom-6 text-5xl text-accent/30">
                    &rdquo;
                  </span>
                  <footer className="mt-4 text-sm font-semibold text-primary">
                    — {director.name}
                  </footer>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
