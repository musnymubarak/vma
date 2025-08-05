"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className=" text-white py-20 px-6 xl:px-24" id="about">
      {/* Top Line */}
      <p className="text-sm text-[#f0b41c] font-medium uppercase mb-2">
        Accurate. Creative. Professional.
      </p>

      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold text-[#f0b41c] mb-8">
        Designing the Future, Honoring the Past
      </h3>

      {/* Grid Layout for Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ color: '#263039' }}>
        {/* Left Column */}
        <div>
          <p className="mb-4 leading-relaxed">
            At VMA Studio, we transform ideas into precision-driven designs.
            Since 2016, we’ve been a trusted global partner in drafting and
            architectural visualization, delivering high-quality design
            documentation and photorealistic visuals that bring concepts to life.
          </p>
          <p className="leading-relaxed">
            From new constructions to evaluations of existing structures and
            rehabilitation of aging buildings, our work spans across diverse
            sectors—including commercial, residential, educational, and
            hospitality developments.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <p className="mb-4 leading-relaxed">
            What sets us apart? Our collaborative approach. We work hand-in-hand
            with architects, structural engineers, real estate agencies, and
            other industry professionals to ensure every project is coordinated,
            efficient, and competitively priced.
          </p>
          <p className="leading-relaxed">
            With a deep commitment to design excellence and practical solutions,
            VMA Studio bridges creativity with constructibility—worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
