"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  suffix?: string;
  text?: boolean;
  label: string;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  text = false,
  label,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(text ? label : "0");

  useEffect(() => {
    if (text) return;

    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        setDisplay(Math.floor(obj.val).toString());
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, text, label]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="font-heading text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        {text ? (
          <span className="text-2xl md:text-3xl lg:text-4xl">{label}</span>
        ) : (
          <>
            {display}
            <span className="text-accent">{suffix}</span>
          </>
        )}
      </div>
      {!text && (
        <p className="mt-2 text-sm font-medium tracking-wide text-dark/60 uppercase">
          {label}
        </p>
      )}
    </div>
  );
}
