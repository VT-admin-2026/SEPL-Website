"use client";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  light = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase ${
          light
            ? "border-white/20 bg-white/10 text-accent"
            : "border-primary/15 bg-primary/5 text-primary"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-accent" : "bg-accent"}`} />
        {eyebrow}
      </div>
      <h2
        className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className={light ? "text-accent" : "text-gradient"}>{highlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/60" : "text-dark/60"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`section-heading-line mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
