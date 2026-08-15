interface DecorativeBackgroundProps {
  variant?: "light" | "dark" | "mesh";
  className?: string;
}

export default function DecorativeBackground({
  variant = "light",
  className = "",
}: DecorativeBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="grid-pattern absolute inset-0" />
      {variant === "mesh" && (
        <>
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
        </>
      )}
      {variant === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      )}
      {variant === "light" && (
        <>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </>
      )}
    </div>
  );
}
