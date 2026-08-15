import Image from "next/image";
import { images } from "@/lib/images";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 44, className = "" }: LogoProps) {
  return (
    <Image
      src={images.logo}
      alt="Suvidhinath Electronics Pvt. Ltd."
      width={160}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height }}
      priority
    />
  );
}
