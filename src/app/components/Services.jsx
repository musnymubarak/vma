"use client";
import React, { useState, useEffect } from "react";

const Slideshow = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative mb-6 rounded overflow-hidden shadow-md -mx-10">
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="w-full h-64 md:h-80 object-cover select-none"
        draggable={false}
      />
      <button
        onClick={goPrev}
        aria-label="Previous Image"
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>
      <button
        onClick={goNext}
        aria-label="Next Image"
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>
    </div>
  );
};

const Services = () => {
  const headDraftingImages = [
    "/images/samples/hd/1.png",
    "/images/samples/hd/2.png",
    "/images/samples/hd/3.png",
  ];

  const modelingImages = [
    "/images/samples/3d/1.png",
    "/images/samples/3d/2.png",
    "/images/samples/3d/3.png",
  ];

  return (
    <section className="py-0 px-6 xl:px-20" id="services">
      <h3
        className="text-5xl font-extrabold mb-12 text-center"
        style={{ color: "#484c54" }}
      >
        Our Services
        <span
          className="block mx-auto mt-3"
          style={{
            width: "100px",
            height: "5px",
            backgroundColor: "#e2b63d",
            borderRadius: "3px",
          }}
        />
      </h3>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-[#263039] pt-0 px-10 pb-10 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gray-700 cursor-pointer">
          <Slideshow images={headDraftingImages} alt="Head Drafting" />
          <h4 className="text-3xl font-bold mb-4 text-white">Head Drafting</h4>
          <p className="text-lg text-gray-300 leading-relaxed">
            Detailed 2D drafting services for structural and architectural plans. Accurate, clear, and professionally formatted.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-[#263039] pt-0 px-10 pb-10 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gray-700 cursor-pointer">
          <Slideshow images={modelingImages} alt="3D Modeling & Visualizing" />
          <h4 className="text-3xl font-bold mb-4 text-white">
            3D Modeling & Visualizing
          </h4>
          <p className="text-lg text-gray-300 leading-relaxed">
            Realistic 3D models and visualizations to bring your concepts to life. Ideal for presentations, planning, and simulations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
