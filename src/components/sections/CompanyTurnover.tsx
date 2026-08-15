"use client";

import { TrendingUp, Users, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { turnover } from "@/lib/data";

export default function CompanyTurnover() {
  return (
    <section id="turnover" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Company Turnover
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Growth & <span className="text-gradient">Success</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: TrendingUp, title: "Market Growth", text: turnover.intro },
            { icon: Users, title: "Customer Trust", text: turnover.growth },
            { icon: Sparkles, title: "Brand Success", text: turnover.highlight },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="fade-up" delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-gray-100 bg-light p-8 transition-shadow hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-dark">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-dark/60">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
