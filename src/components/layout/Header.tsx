"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 py-3 shadow-lg shadow-primary/5 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <div
            className={`shrink-0 overflow-hidden rounded-xl transition-colors ${
              scrolled ? "bg-white" : "bg-white/95 p-1 shadow-sm backdrop-blur-sm"
            }`}
          >
            <Logo height={40} />
          </div>
          <span
            className={`font-heading text-sm font-bold tracking-tight sm:text-base lg:text-lg ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            {siteConfig.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full ${
                scrolled
                  ? "text-dark/70 hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            Get in Touch
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-dark" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-dark/70 transition-colors hover:bg-light hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
