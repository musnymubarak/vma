"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce website",
    description: "An advanced e-commerce platform with product catalog, cart, and payment gateway.",
    image: "/images/projects/1.png",
    tag: ["All", "Head Drafting"],
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description: "Personal site built with Next.js and Tailwind to showcase my skills and projects.",
    image: "/images/projects/3.png",
    tag: ["All", "Head Drafting"],
  },
  {
    id: 2,
    title: "Booking App",
    description: "A hotel booking app with login, reservations, and admin dashboard built using MERN stack.",
    image: "/images/projects/2.png",
    tag: ["All", "3D Modelling"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative">
       <h3
        className="text-5xl font-extrabold mb-12 text-center"
        style={{ color: "#fafbfcff" }}
      >
        Projects
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag name="All" onClick={handleTagChange} isSelected={tag === "All"} />
        <ProjectTag name="Head Drafting" onClick={handleTagChange} isSelected={tag === "Head Drafting"} />
        <ProjectTag name="3D Modelling" onClick={handleTagChange} isSelected={tag === "3D Modelling"} />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
