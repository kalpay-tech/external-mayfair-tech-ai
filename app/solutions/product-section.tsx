"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function ProductSection() {
  const productImages = [
    "/images/solution-and-industries/mayfair-highstreet-1.png",
    "/images/solution-and-industries/mayfair-highstreet-2.png",
    "/images/solution-and-industries/mayfair-highstreet-3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, productImages.length]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  const highlights = [
    "Shop worldwide, pay locally",
    "AI-powered product recommendations",
    "Secure payments & multi-currency support",
    "Fast cross-border logistics",
    "24/7 customer support",
  ];

  return (
    <section className="bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#081b3e] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Product
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Side: Image Slider */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              {/* <div className="aspect-[4/3] bg-gradient-to-br from-[#081b3e] to-[#183f40]"> */}
              <div className="h-[600px] w-full bg-gradient-to-br from-[#081b3e] to-[#183f40]">

                {/* Image Container */}
                <div className="relative h-full w-full">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {!failedImages.has(index) ? (
                        <img
                          src={image}
                          alt={`Mayfair Highstreet ${index + 1}`}
                          className="h-full w-full object-cover"
                          onError={() => {
                            setFailedImages((prev) => new Set(prev).add(index));
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#081b3e] via-[#183f40] to-[#31703a] flex items-center justify-center">
                          <div className="text-center text-white/60">
                            <svg
                              className="mx-auto mb-4 h-16 w-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                            <p className="text-sm">Product Image {index + 1}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30"
                  aria-label="Previous image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30"
                  aria-label="Next image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-[#6fee51]"
                          : "w-2 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex-1 space-y-6 text-white">
            {/* Product Name */}
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">MAYFAIR HIGHSTREET</h2>

            {/* Tagline */}
            <p className="text-xl font-semibold text-[#6fee51] sm:text-2xl">SHOP THE WORLD</p>

            {/* Subheadline */}
            <p className="text-lg text-white/90 sm:text-xl">
              Mayfair Highstreet — Global Shopping, Made Simple
            </p>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Mayfair Highstreet is our flagship e-commerce product — a complete AI-driven shopping
              experience that brings global brands to customers with local payment options, instant
              personalization, and seamless cross-border delivery. Built and powered by MayfairTech.ai.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[#6fee51]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base text-white/90 sm:text-lg">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/products/mayfair-highstreet"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6fee51] px-8 py-4 text-base font-semibold text-[#081b3e] shadow-lg transition hover:bg-white hover:shadow-xl"
              >
                Explore Mayfair Highstreet
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

