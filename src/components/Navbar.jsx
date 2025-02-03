import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900/90 text-white w-full z-50 fixed top-0 flex items-center p-3 justify-between">
      {/* Logo cliquable */}
      <a href="/" className="font-exo text-2xl font-bold hover:text-blue-300 lg:ml-6">
        [KB]
      </a>

      {/* Menu de navigation sur grand écran */}
      <nav role="navigation" className="hidden lg:flex flex-grow justify-center pr-18">
        <ul className="flex gap-6">
          <li>
            <a href="#about" className="text-sm font-semibold hover:text-blue-300">
              [À propos]
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm font-semibold hover:text-blue-300">
              [Compétences]
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm font-semibold hover:text-blue-300">
              [Projets]
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-semibold hover:text-blue-300">
              [Contact]
            </a>
          </li>
        </ul>
      </nav>

      {/* Bouton menu burger pour mobile */}
      <button
        className="flex flex-col gap-1 w-8 h-8 justify-center items-center lg:hidden ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-6 h-1 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menu de navigation mobile */}
      <nav
        className={`absolute top-full left-0 w-full bg-blue-900/90 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 pb-2">
          <li>
            <a href="#about" className="text-sm font-semibold hover:text-blue-300">
              [À propos]
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm font-semibold hover:text-blue-300">
              [Compétences]
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm font-semibold hover:text-blue-300">
              [Projets]
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-semibold hover:text-blue-300">
              [Contact]
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
