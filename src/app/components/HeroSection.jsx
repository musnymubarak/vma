"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-screen">
      {/* Full-width, full-height background image */}
      <Image
        src="/images/Hero.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay with text and button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 space-y-6 px-6 text-center">
        <p className="text-white font-semibold leading-snug max-w-3xl">
          <span className="block text-2xl sm:text-5xl">
            Embrace your ambitions with unwavering determination;
          </span>
          <span className="block text-xl sm:text-3xl mt-2">
            for me, this stands as the ultimate path forward.
          </span>
        </p>
        <Link
          href="/#contact"
          className="px-6 py-3 text-lg font-semibold text-[#e2b63d] bg-[#14232b] rounded-full hover:bg-[#1e323d] transition duration-300"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
