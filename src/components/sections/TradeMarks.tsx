"use client";

import { Tag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { tradeMarks } from "@/lib/data";

export default function TradeMarks() {
  return (
    <section id="trademarks" className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Trade Marks
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our <span className="text-accent">Brands</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {tradeMarks.map((tm, i) => (
            <motion.div
              key={tm.name}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 transition-transform group-hover:scale-150" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/20">
                  {i === 0 ? (
                    <Sparkles className="h-7 w-7 text-accent" />
                  ) : (
                    <Tag className="h-7 w-7 text-accent" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                    {tm.category}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                    {tm.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">{tm.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
