"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface LocalImageProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string;
}

export default function LocalImage({
  src,
  alt,
  className = "",
  fallbackClassName = "bg-gradient-to-br from-primary via-secondary to-dark",
  ...props
}: LocalImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${fallbackClassName} ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
