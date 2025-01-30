function About() {
  return (
    <section id="about" className="bg-blue-900 py-8 px-6 w-full flex flex-col items-center text-center">
        {/* Titre */}
        <h2 className="font-exo text-3xl font-bold text-gray-100 mb-5">À propos de moi</h2>

        {/* Image de profil */}
        <img
          src="/photo_id.jpg"
          alt="Photo de profil"
          className="w-32 h-32 rounded-full shadow-lg mb-5 object-cover grayscale"
        />

        {/* Texte de présentation */}
        <p className="text-lg text-gray-100">
          Passionné par les technologies numériques, j’ai récemment suivi une formation de
          développeur web sur OpenClassrooms. Toujours curieux et en quête d’apprentissage, je
          cherche continuellement à acquérir de nouvelles compétences et à relever des défis
          techniques. Mon objectif est de concevoir des solutions innovantes et performantes tout en
          continuant à évoluer dans cet univers passionnant.
        </p>
    </section>
  );
}

export default About;
