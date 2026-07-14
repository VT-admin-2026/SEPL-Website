"use client";

import { useEffect, useRef } from "react";
import LocalImage from "@/components/ui/LocalImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  IndianRupee,
  Building2,
  Calendar,
  Cpu,
  ArrowRight,
  MapPin,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { completedProjects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const projectGradients = [
  "from-primary/90 via-secondary/80 to-dark/90",
  "from-dark/90 via-primary/80 to-secondary/90",
  "from-secondary/90 via-primary/70 to-dark/90",
  "from-primary/80 via-dark/90 to-secondary/80",
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section-padding bg-white">
      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Completed Projects
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Landmark <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-dark/60">
            Delivering transformative projects for government bodies and communities
            across Maharashtra.
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {completedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const gradient = projectGradients[index % projectGradients.length];

            return (
              <motion.article
                key={project.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="project-card group overflow-hidden rounded-3xl border border-gray-100 bg-light shadow-lg shadow-primary/5"
              >
                <div
                  className={`grid lg:grid-cols-2 lg:min-h-[420px] ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Image panel */}
                  <div className="relative min-h-[280px] overflow-hidden bg-primary lg:min-h-full lg:[direction:ltr]">
                    <LocalImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div>
                        <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
                          {project.category}
                        </span>
                        <p className="mt-4 font-heading text-5xl font-bold text-white/20">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur-md"
                          >
                            <p className="font-heading text-xl font-bold text-white">
                              {stat.value}
                            </p>
                            <p className="text-xs text-white/70">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex flex-col justify-center p-8 lg:p-12 lg:[direction:ltr]">
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-accent">
                      <MapPin className="h-4 w-4" />
                      Maharashtra, India
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-dark md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-dark/65">
                      {project.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {[
                        {
                          icon: IndianRupee,
                          label: "Project Value",
                          value: project.value,
                        },
                        {
                          icon: Building2,
                          label: "Client",
                          value: project.client,
                        },
                        {
                          icon: Calendar,
                          label: "Completion",
                          value: project.completion,
                        },
                        {
                          icon: Cpu,
                          label: "Technology",
                          value: project.technology,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-primary/10 bg-white p-4 transition-colors group-hover:border-primary/20"
                        >
                          <item.icon className="mb-2 h-4 w-4 text-primary" />
                          <p className="text-[10px] font-semibold tracking-wider text-dark/40 uppercase">
                            {item.label}
                          </p>
                          <p className="mt-0.5 font-heading text-sm font-bold text-dark">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      Discuss a similar project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
