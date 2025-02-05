function ProjectCard({ project, openModal }) {
  return (
    <div
      key={project.title}
      className="relative h-48 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 px-4 py-4 flex flex-col justify-between bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50 before:rounded-lg"
      style={{ backgroundImage: `url(${project.image})` }}
      onClick={() => openModal(project)}
    >
      {/* Titre et description du projet */}
      <div className="z-10">
        <h3 className="font-exo text-gray-100 text-lg font-semibold mb-4">{project.title}</h3>
        <p className="text-gray-100 text-sm font-semibold w-70">{project.description}</p>
      </div>
      {/* Tags technologies */}
      <div className="z-10 self-end flex gap-x-2">
        {project.technologies.map((technologie) => (
          <div
            key={technologie}
            className="bg-blue-900 w-20 text-gray-100 text-center text-sm font-semibold rounded-xl shadow-lg"
          >
            {technologie}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectCard;
