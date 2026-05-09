"use client"; // Ak používaš Next.js App Router
import { useState } from "react";
import Container from "./layout/Container";
import Image from "next/image";
import PrimaryButton from "./layout/PrimaryButton";
import H2 from "./layout/H2";
import { GALLERY_IMAGES } from "@/constants";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(6);

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <section className="py-20 " id="galeria">
      <Container className="flex flex-col gap-15">
        <div className="flex flex-col text-center items-center">
          <H2>Naša práca v detailoch</H2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, visibleItems).map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square  overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-light tracking-wider border-l border-gold pl-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < GALLERY_IMAGES.length && (
          <div className="mt-16 flex justify-center">
            <div onClick={showMoreItems}>
              <PrimaryButton>Načítať ďalšie projekty</PrimaryButton>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
