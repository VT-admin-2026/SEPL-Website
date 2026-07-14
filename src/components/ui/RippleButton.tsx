"use client";

import { useRef, MouseEvent } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function RippleButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const handleRipple = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={className}
        onClick={(e) => {
          handleRipple(e);
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      className={className}
      onClick={(e) => {
        handleRipple(e);
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
