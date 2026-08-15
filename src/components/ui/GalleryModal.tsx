"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  title: string;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export default function GalleryModal({
  isOpen,
  title,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: GalleryModalProps) {
  const hasMultiple = images.length > 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) onPrev();
      if (e.key === "ArrowRight" && hasMultiple) onNext();
    },
    [isOpen, onClose, onPrev, onNext, hasMultiple]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/90 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-center">
              <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                {title}
              </h3>
              {hasMultiple && (
                <p className="mt-1 text-sm text-white/60">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>

            <div className="relative flex w-full items-center justify-center">
              {hasMultiple && (
                <button
                  onClick={onPrev}
                  className="absolute left-0 z-10 flex h-12 w-12 -translate-x-2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:-translate-x-14"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={images[currentIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-h-[70vh] w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`${title} - ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="mx-auto max-h-[70vh] w-auto object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </motion.div>
              </AnimatePresence>

              {hasMultiple && (
                <button
                  onClick={onNext}
                  className="absolute right-0 z-10 flex h-12 w-12 translate-x-2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:translate-x-14"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}
            </div>

            {hasMultiple && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => onGoTo(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === currentIndex ? "w-6 bg-accent" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
