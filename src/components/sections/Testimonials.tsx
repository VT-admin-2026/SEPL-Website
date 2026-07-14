"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data";

const categories = ["All", "Government", "Private Clients", "Partners"];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === filter);

  useEffect(() => {
    setActive(0);
  }, [filter]);

  const next = () => setActive((prev) => (prev + 1) % filtered.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-12 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </AnimatedSection>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-light text-dark/60 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatedSection animation="fade-up">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -top-6 left-8">
              <Quote className="h-16 w-16 text-primary/10" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-light p-8 shadow-lg md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${filter}-${active}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg leading-relaxed text-dark/70 md:text-xl">
                    &ldquo;{filtered[active]?.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                      {filtered[active]?.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark">
                        {filtered[active]?.author}
                      </p>
                      <p className="text-sm text-dark/50">
                        {filtered[active]?.role}
                      </p>
                      <span className="mt-1 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                        {filtered[active]?.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === active ? "w-8 bg-primary" : "w-2 bg-dark/20"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-dark/60 transition-colors hover:border-primary hover:text-primary"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-dark/60 transition-colors hover:border-primary hover:text-primary"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
