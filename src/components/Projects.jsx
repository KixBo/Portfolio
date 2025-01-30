import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

{
  /* Tableau des projets */
}
const projects = [
  {
    title: "Kasa",
    image: "/kasa_background.png",
    github: "https://github.com/KixBo/Kasa",
    technologies: ["React", "Sass"],
    images: ["/kasa_screen1.png", "/kasa_screen2.png", "/kasa_screen3.png"],
    description: "Création d'une application web de location immobilière avec React",
    overview:
      "Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France. Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. La CTO a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec React côté front-end.",
    achievement:
      "J'ai été amené à démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives), tout en prenant en compte les contraintes techniques de l'entreprise.",
  },
  {
    title: "Mon Vieux Grimoire",
    image: "/grimoire_background.png",
    github: "https://github.com/KixBo/Mon-Vieux-Grimoire",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    images: [
      "/grimoire_screen1.png",
      "/grimoire_screen2.png",
      "/grimoire_screen3.png",
      "/grimoire_screen4.png",
      "/grimoire_screen5.png",
      "/grimoire_screen6.png",
    ],
    description: "Développement du back-end d'un site de notation de livres",
    overview:
      "Le Vieux Grimoire est une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres. Le site s’appellera “Mon Vieux Grimoire”, et permettra aux membres d’ajouter un nouveau livre et de mettre une note visible par le public.",
    achievement:
      "J'ai été amené à créer une API en suivant un document de spécifications techniques tout en prenant en compte la taille des images pour que le projet soit conforme aux bonnes pratiques de Green Code. J'ai aussi dû stocker des données de manière sécurisée, mettre en oeuvre des opérations CRUD de manière sécurisée et implémenter un modèle de logique de données conformément à la réglementation.",
  },
];

{
  /* Paramètres du carrousel */
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

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
    <section id="projects" className="my-8 px-6 w-full">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mes projets</h2>
      <div className="flex flex-col gap-y-6">
        {/* Projets */}
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative h-48 rounded-lg cursor-pointer shadow-lg hover:scale-105 px-4 py-4 flex flex-col justify-between bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50 before:rounded-lg"
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => openModal(project)}
          >
            {/* Titre et description du projet */}
            <div className="z-10">
              <h3 className="text-white text-lg font-semibold mb-4">{project.title}</h3>
              <p className="text-white text-sm font-semibold w-70">{project.description}</p>
            </div>
            {/* Tags technologies */}
            <div className="z-10 self-end flex gap-x-2">
              {project.technologies.map((technologie) => (
                <div
                  key={technologie}
                  className="bg-blue-800 w-20 text-white text-center text-sm font-semibold rounded-xl"
                >
                  {technologie}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modale du projet */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center p-6 justify-center bg-black/85"
      >
        <Dialog.Panel className="bg-gray-300 w-full p-6 rounded-lg max-h-[90vh] overflow-y-auto">
          {/* Titre & Bouton de fermeture */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedProject?.title}</h2>
            <button onClick={closeModal} className="text-gray-900 text-2xl">
              <IoIosCloseCircleOutline />
            </button>
          </div>
          {/* Carousel d'images */}
          {selectedProject?.images?.length > 0 && (
            <div className="relative custom-slider mb-4">
              <Slider {...settings}>
                {selectedProject.images.map((image) => (
                  <div key={image}>
                    <img src={image} alt="Image du projet" className="w-full rounded-lg" />
                  </div>
                ))}
              </Slider>
            </div>
          )}
          {/* Tags technologies */}
          <div className="z-10 self-end flex gap-x-2">
            {selectedProject?.technologies.map((technologie) => (
              <div
                key={technologie}
                className="bg-blue-800 w-20 text-white text-center text-sm font-semibold rounded-xl"
              >
                {technologie}
              </div>
            ))}
          </div>
          {/* Lien vers le projet */}
          <a
            href={selectedProject?.github}
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-3 py-1 rounded-md font-semibold inline-block mt-4"
          >
            Voir le Github
          </a>
          {/* Description */}
          <h4 className="text-xl font-bold mt-3 mb-2">Contexte</h4>
          <p className="text-sm">{selectedProject?.overview}</p>
          <h4 className="text-xl font-bold mt-3 mb-2">Travail réalisé</h4>
          <p className="text-sm">{selectedProject?.achievement}</p>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

export default Projects;
