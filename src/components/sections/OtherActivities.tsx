"use client";

import { useState } from "react";
import LocalImage from "@/components/ui/LocalImage";
import GalleryModal from "@/components/ui/GalleryModal";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { galleryItems, otherActivitiesContent } from "@/lib/data";

export default function OtherActivities() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<string[]>([]);
  const [activeTitle, setActiveTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (title: string, images: string[]) => {
    setActiveTitle(title);
    setActiveGallery(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeGallery = () => {
    setModalOpen(false);
    setActiveGallery([]);
    setCurrentIndex(0);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeGallery.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
  };

  return (
    <section id="activities" className="section-padding bg-light">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Other Activities
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Community <span className="text-gradient">Development</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-dark/60">
            {otherActivitiesContent.intro}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {otherActivitiesContent.initiatives.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-medium text-dark/70"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="masonry-grid">
            {galleryItems.map((item) => {
              const galleryImages = item.images ?? [item.image];
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openGallery(item.title, galleryImages)}
                  className="masonry-item group relative w-full cursor-pointer overflow-hidden rounded-2xl border-0 p-0 text-left shadow-md"
                  aria-label={`View ${item.title} photos`}
                >
                  <LocalImage
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.height}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 p-5">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    {galleryImages.length > 1 && (
                      <p className="mt-1 text-xs text-white/70">
                        {galleryImages.length} photos — click to view
                      </p>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      <GalleryModal
        isOpen={modalOpen}
        title={activeTitle}
        images={activeGallery}
        currentIndex={currentIndex}
        onClose={closeGallery}
        onPrev={goPrev}
        onNext={goNext}
        onGoTo={setCurrentIndex}
      />
    </section>
  );
}
