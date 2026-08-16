import { Linkedin, Facebook, Instagram } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig, footerLinks } from "@/lib/data";

const socialIcons = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark text-white">
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
                <Logo height={40} />
              </div>
              <span className="font-heading text-sm font-bold sm:text-base">
                {siteConfig.shortName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest text-white/40 uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest text-white/40 uppercase">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest text-white/40 uppercase">
              Projects
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label.length > 35
                      ? link.label.slice(0, 35) + "..."
                      : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name} All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Engineering Tomorrow, Powering Rural India.
          </p>
        </div>
      </div>
    </footer>
  );
}
