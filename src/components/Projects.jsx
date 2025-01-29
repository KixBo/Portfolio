import { Dialog } from "@headlessui/react";

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
  },
];

function Projects() {
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
    </section>
  );
}

export default Projects;
