import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

{
  /* Tableau des projets */
}
const projects = [
  {
    title: "Kasa",
    image: "/kasa_background.webp",
    github: "https://github.com/KixBo/Kasa",
    technologies: ["React", "Sass"],
    images: ["/kasa_screen1.webp", "/kasa_screen2.webp", "/kasa_screen3.webp"],
    description: "Création d'une application web de location immobilière avec React",
    overview:
      "Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France. Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. La CTO a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec React côté front-end.",
    achievement:
      "J'ai été amené à démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives), tout en prenant en compte les contraintes techniques de l'entreprise.",
  },
  {
    title: "Mon Vieux Grimoire",
    image: "/grimoire_background.webp",
    github: "https://github.com/KixBo/Mon-Vieux-Grimoire",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    images: [
      "/grimoire_screen1.webp",
      "/grimoire_screen2.webp",
      "/grimoire_screen3.webp",
      "/grimoire_screen4.webp",
      "/grimoire_screen5.webp",
      "/grimoire_screen6.webp",
    ],
    description: "Développement du back-end d'un site de notation de livres",
    overview:
      "Le Vieux Grimoire est une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres. Le site s’appellera “Mon Vieux Grimoire”, et permettra aux membres d’ajouter un nouveau livre et de mettre une note visible par le public.",
    achievement:
      "J'ai été amené à créer une API en suivant un document de spécifications techniques tout en prenant en compte la taille des images pour que le projet soit conforme aux bonnes pratiques de Green Code. J'ai aussi dû stocker des données de manière sécurisée, mettre en oeuvre des opérations CRUD de manière sécurisée et implémenter un modèle de logique de données conformément à la réglementation.",
  },
];

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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} openModal={openModal} />
        ))}
      </div>
      {/* Modale du projet */}
      <ProjectModal isOpen={isOpen} closeModal={closeModal} selectedProject={selectedProject} />
    </section>
  );
}

export default Projects;
