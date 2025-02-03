function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black/80">
      {/* Vidéo en arrière-plan */}
      <video
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-10 "
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Titre */}
      <h1 className="font-exo text-3xl font-bold text-gray-100 mb-8">DEVELOPPEUR WEB</h1>

      {/* Boutons */}
      <div className="space-x-4">
        {/* Bouton Télécharger CV */}
        <a
          href="CV.pdf"
          download="Mon_CV.pdf"
          className="font-exo bg-blue-900 hover:bg-gray-900 text-gray-100 px-3 py-2 rounded-md"
        >
          Télécharger CV
        </a>
        {/* Bouton GitHub */}
        <a
          href="https://github.com/kixbo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-exo bg-blue-900 hover:bg-gray-900 text-gray-100 px-3 py-2 rounded-md"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;
