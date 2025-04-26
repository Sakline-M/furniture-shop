'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Pea Stool",
    image: "/onegirl.jpg",
  },
  {
    title: "Modern Stool",
    image: "/twogirl.jpg",
  },
  {
    title: "Plants",
    image: "/plantwater.jpg",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="relative w-full sm:w-1/3 h-[33.33vh] sm:h-full overflow-hidden group"
        >
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut",  delay: 0.2 }}
              viewport={{ once: false }}
              className="text-white text-3xl font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            >
              {slide.title}
            </motion.h2>
          </div>
        </div>
      ))}
    </div>
  );
}
