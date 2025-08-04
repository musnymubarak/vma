import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white text-black p-6 rounded-xl max-w-lg w-full mx-4 shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4">
          {project.description || "No description provided."}
        </p>
        <div className="flex gap-4">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Preview
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
