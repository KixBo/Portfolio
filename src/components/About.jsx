function About() {
  return (
    <section id="about" className="my-8 px-4">
      <div className="w-full flex flex-col items-center text-center">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-gray-900 mb-5">À propos de moi</h2>

        {/* Image de profil */}
        <img
          src="/photo_id.jpg"
          alt="Photo de profil"
          className="w-32 h-32 rounded-full shadow-lg mb-5 object-cover grayscale"
        />

        {/* Texte de présentation */}
        <p className="text-lg text-gray-700">
          Passionné par les technologies numériques, j’ai récemment suivi une formation de
          développeur web sur OpenClassrooms. Toujours curieux et en quête d’apprentissage, je
          cherche continuellement à acquérir de nouvelles compétences et à relever des défis
          techniques. Mon objectif est de concevoir des solutions innovantes et performantes tout en
          continuant à évoluer dans cet univers passionnant.
        </p>
      </div>
    </section>
  );
}

export default About;
