"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fade-up" | "slide-left" | "slide-right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1,
  className = "",
  stagger = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
    };

    switch (animation) {
      case "fade-up":
        fromVars.y = 60;
        toVars.y = 0;
        break;
      case "slide-left":
        fromVars.x = 80;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = -80;
        toVars.x = 0;
        break;
      case "scale":
        fromVars.scale = 0.9;
        toVars.scale = 1;
        break;
      case "fade":
        break;
    }

    const targets = stagger > 0 ? el.children : el;

    const tween = gsap.fromTo(targets, fromVars, {
      ...toVars,
      stagger: stagger > 0 ? stagger : undefined,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
