"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, MapPin, FileText, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ongoingProjects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function OngoingProjects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ongoing-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ongoing-projects" className="section-padding bg-light">
      <div ref={ref} className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            On Going Projects
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Currently <span className="text-gradient">In Progress</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {ongoingProjects.map((project, index) => (
            <div
              key={project.title}
              className="ongoing-card group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-3">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white lg:col-span-1">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Active · {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </p>
                </div>
                <div className="p-8 lg:col-span-2">
                  <p className="leading-relaxed text-dark/65">{project.description}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl bg-light p-4">
                      <Building2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[10px] text-dark/40 uppercase">Client</p>
                        <p className="text-sm font-bold text-dark">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-light p-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[10px] text-dark/40 uppercase">Technology</p>
                        <p className="text-sm font-bold text-dark">{project.technology}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-dark/40">
                    Work Order: {project.workOrder}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                  >
                    Enquire about this project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
