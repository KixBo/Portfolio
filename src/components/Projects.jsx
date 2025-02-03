import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projectsData.json";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <section id="projects" className="bg-blue-900 py-8 px-6 w-full lg:px-80 lg:py-12">
      {/* Titre */}
      <h2 className="font-exo text-3xl font-bold text-gray-100 mb-8 text-center">Projets</h2>
      <div className="flex flex-col gap-y-6">
        {/* Projets */}
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} openModal={openModal} />
        ))}
      </div>
      {/* Modale du projet */}
      <ProjectModal isOpen={isOpen} closeModal={closeModal} selectedProject={selectedProject} />
    </section>
  );
}

export default Projects;
