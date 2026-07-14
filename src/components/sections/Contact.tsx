"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RippleButton from "@/components/ui/RippleButton";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Address",
      value: siteConfig.contact.address,
      multiline: true,
    },
    {
      icon: Phone,
      label: "Call Us",
      value: siteConfig.contact.phone,
      href: `tel:+91${siteConfig.contact.phone}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.contact.whatsapp,
      href: `https://wa.me/91${siteConfig.contact.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>
        </AnimatedSection>

        <div className="mb-12 overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src={siteConfig.contact.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SEPL Office Location — Shirpur-Warwade"
            className="w-full"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection animation="slide-right" className="lg:col-span-2">
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-dark/40 uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "WhatsApp" ? "_blank" : undefined}
                        rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm leading-relaxed text-dark/70 transition-colors hover:text-primary"
                      >
                        {item.label === "Call Us" || item.label === "WhatsApp"
                          ? `+91 ${item.value}`
                          : item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed whitespace-pre-line text-dark/70">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-lg md:p-10"
            >
              <h3 className="font-heading text-xl font-bold text-dark">
                Send us a Message
              </h3>
              <p className="mt-1 text-sm text-dark/50">
                We&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark/70">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-light px-4 py-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark/70">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-light px-4 py-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-dark/70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-light px-4 py-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-dark/70">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-light px-4 py-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Project inquiry"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark/70">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-gray-200 bg-light px-4 py-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <RippleButton
                type="submit"
                className="btn-primary mt-6 w-full sm:w-auto"
              >
                {submitted ? "Message Sent!" : "Send Message"}
                <Send className="h-4 w-4" />
              </RippleButton>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
