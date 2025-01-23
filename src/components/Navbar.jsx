function Navbar() {
  return (
    <header className="bg-blue-900 bg-opacity-80 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo cliquable */}
        <a href="/" className="text-2xl font-bold hover:text-blue-300">
          [KB]
        </a>

        {/* Menu de navigation */}
        <ul className="flex space-x-6 list-none">
          <li>
            <a href="#hero" className="hover:text-blue-300 no-underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300 no-underline">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-300 no-underline">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-300 no-underline">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300 no-underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
