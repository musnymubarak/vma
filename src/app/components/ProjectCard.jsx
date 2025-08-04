const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
