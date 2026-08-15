"use client";

import LocalImage from "@/components/ui/LocalImage";
import { Award, FileText, Hash, Building } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyDetails } from "@/lib/data";
import { images } from "@/lib/images";

const details = [
  { icon: Award, label: "Certification", value: companyDetails.iso },
  { icon: Hash, label: "Udyog Aadhar", value: companyDetails.udyogAadhar },
  { icon: FileText, label: "GSTIN", value: companyDetails.gstin },
  { icon: Building, label: "CIN", value: companyDetails.cin },
];

export default function CompanyDetails() {
  return (
    <section id="company-details" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Company Details
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Registered & <span className="text-gradient">Certified</span>
          </h2>
        </AnimatedSection>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection animation="slide-right">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/10 bg-light p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest text-dark/40 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold text-dark">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white md:p-10">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <h3 className="relative font-heading text-2xl font-bold">
                An ISO 9001:2008 Certified Company
              </h3>
              <p className="relative mt-4 leading-relaxed text-white/80">
                Suvidhinath Electronics Pvt. Ltd. is a legally registered private
                limited company incorporated in Maharashtra, operating as a
                registered government contractor for PWD, MSEDCL, Indian Railways
                and MIDC.
              </p>
              <div className="relative mt-6 flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border-2 border-white/30 bg-white p-1.5">
                  <LocalImage
                    src={images.logo}
                    alt="Suvidhinath Electronics Pvt. Ltd."
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold">Established 2013</p>
                  <p className="text-sm text-white/70">Shirpur, Maharashtra</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
