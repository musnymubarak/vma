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

      {/* Overlay with button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <Link
          href="/#contact"
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full hover:from-green-500 hover:to-purple-700 transition duration-300"
        >
          Hire Me
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
