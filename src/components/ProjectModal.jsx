import { Dialog } from "@headlessui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ProjectCarousel from "./ProjectCarousel";

function ProjectModal({ isOpen, closeModal, selectedProject }) {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-50 flex items-center p-6 justify-center bg-black/85"
    >
      <Dialog.Panel className="bg-gray-300 w-full p-6 rounded-lg max-h-[90vh] overflow-y-auto lg:w-200">
        {/* Titre & Bouton de fermeture */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold lg:text-3xl">{selectedProject?.title}</h2>
          <button onClick={closeModal} className="text-gray-900 text-2xl lg:text-3xl">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        {/* Carousel d'images */}
        {selectedProject?.images?.length > 0 && <ProjectCarousel images={selectedProject.images} />}
        {/* Tags technologies */}
        <div className="z-10 self-end flex gap-x-2">
          {selectedProject?.technologies.map((technologie) => (
            <div
              key={technologie}
              className="bg-blue-900 w-20 text-white text-center text-sm font-semibold rounded-xl"
            >
              {technologie}
            </div>
          ))}
        </div>
        {/* Lien vers le projet */}
        <a
          href={selectedProject?.github}
          target="_blank"
          className="bg-gray-800 hover:bg-gray-900 text-white text-sm lg:text-lg px-3 py-1 rounded-md font-semibold inline-block mt-4"
        >
          Voir le Github
        </a>
        {/* Description */}
        <h4 className="text-xl font-bold mt-3 mb-2 lg:text-2xl">Contexte</h4>
        <p className="text-sm lg:text-base">{selectedProject?.overview}</p>
        <h4 className="text-xl font-bold mt-3 mb-2 lg:text-2xl">Travail réalisé</h4>
        <p className="text-sm lg:text-base">{selectedProject?.achievement}</p>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ProjectModal;
