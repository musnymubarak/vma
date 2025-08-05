"use client";
import React from "react";
import Image from "next/image";

const Team = () => {
  const members = [
    {
      name: "Musny Mubarak",
      title: "Executive Assistant",
      image: "/images/team/musny.jpg",
    },
    {
      name: "Shameer Cafoor",
      title: "Senior Drafter",
      image: "/images/team/shameer.jpg",
    },
    {
      name: "Afsan Siyath",
      title: "Draftsman",
      image: "/images/team/afsan.jpg",
    },
  ];

  return (
    <section className="text-white py-20 px-6 xl:px-24" id="team">
      {/* Heading */}
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">
        Meet the team
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#e2b63d] mb-10">
        Farsath Abdullah <span className="text-sm text-gray-400">SEO | RDT</span>
      </h2>

      {/* Bio and Image */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="flex-1">
          <p className="text-gray-300 leading-relaxed mb-4">
            Farsath Abdullah brings over 9 years of professional experience in CAD Drafting,
            Architectural Visualization, Construction Documentation, and Building Code
            Compliance. His project background spans architectural, MEP, and structural
            drafting for new construction, existing structure evaluations, and building
            rehabilitations.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Farsath has contributed to a wide range of sectors, including commercial,
            residential, educational, and hospitality projects, delivering precise and
            code-compliant drawings that support design excellence and buildability.
          </p>
          <p className="text-gray-300 leading-relaxed">
            He is a graduate of the College of Technology, holding qualifications in
            Engineering Draftsmanship and Construction Technology in Civil Engineering. As a
            professionally licensed Drafting Technician, registered in multiple states,
            Farsath brings both technical skill and regulatory knowledge to every project. He
            has extensive experience in drafting for a variety of building materials,
            including steel, concrete, masonry, wood, and cold-formed metal framing.
          </p>
        </div>

        <div className="w-full md:w-[280px] flex-shrink-0">
          <Image
            src="/images/team/farsath.png"
            alt="Farsath Abdullah"
            width={500}
            height={500}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#e2b63d] mb-4 shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-lg font-semibold text-white">{member.name}</h4>
            <p className="text-sm text-gray-400">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
