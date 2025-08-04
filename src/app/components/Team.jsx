"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Musny Mubarak",
    role: "CEO & Full Stack Developer",
    image: "/images/CEO.WEBP",
    description:
      "I specialize in full-stack web development with 1+ year experience in MERN stack, WordPress, and database management. I lead our team with a passion for creating engaging digital solutions.",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    image: "/images/Mem1.png",
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    image: "/images/Mem1.png",
  },
  {
    name: "Alex Lee",
    role: "UI/UX Designer",
    image: "/images/Mem1.png",
  },
];

const Team = () => {
  return (
    <section className="text-white py-16 px-4" id="team">
      <div className="max-w-6xl mx-auto">
        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 md:items-start">
          {/* Text on the left */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4">{teamMembers[0].name}</h2>
            <h3 className="text-xl font-semibold mb-2">{teamMembers[0].role}</h3>
            <p className="text-base lg:text-lg">{teamMembers[0].description}</p>
          </div>

          {/* Image on the right */}
          <div className="w-full md:w-1/2 flex justify-end">
            <Image
              src={teamMembers[0].image}
              width={350}
              height={350}
              alt={teamMembers[0].name}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Other Team Members */}
        <h3 className="text-3xl font-bold mb-8 text-center">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                width={200}
                height={200}
                alt={member.name}
                className="rounded-full"
              />
              <p className="mt-4 font-semibold">{member.name}</p>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
