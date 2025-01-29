import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white w-full z-50 fixed top-0 max-w-[1440px] flex justify-between items-center p-3">
      {/* Logo cliquable */}
      <a href="/" className="text-2xl font-bold hover:text-blue-300">
        [KB]
      </a>

      {/* Bouton menu burger */}
      <button
        className="flex flex-col gap-1 w-8 h-8 justify-center items-center"
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

      {/* Menu de navigation */}
      <nav
        className={`absolute top-full left-0 w-full bg-blue-900 transition-all duration-300 ${
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
