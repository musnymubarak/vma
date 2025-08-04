"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex flex-wrap gap-4">
                <span className="bg-gray-800 px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">Express</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">PHP</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">SQL & No SQL</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">React</span>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <p>Bsc IT(R) University of Jaffna | 2022 – 2025</p>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><a href="https://www.credly.com/badges/095ef3fa-e5ac-492a-acca-a3753e04812c/linked_in_profile">Meta Full-Stack Engineer</a></li>
                <li>Google Garager</li>
                <li>IEEE Xtreame Participation</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
             <h3
        className="text-5xl font-extrabold mb-12 text-center"
        style={{ color: "#484c54" }}
      >
       About Us
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
        
        </section>
    );
};

export default AboutSection;
