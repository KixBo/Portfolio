import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xanqjyrd");

  return (
    <section id="contact" className="py-8 px-6 text-center lg:px-80 lg:py-12">
      <h2 className="font-exo text-3xl font-bold text-gray-900 mb-4">Me contacter</h2>
      <p className="text-lg text-gray-700 mb-6">
        Envoyez-moi un message directement ici ou sur killian.boyer@hotmail.fr.
      </p>

      {/* Affichage d'un message si l'envoi est réussi */}
      {state.succeeded ? (
        <p className="text-green-600 font-semibold">Merci ! Votre message a bien été envoyé.</p>
      ) : (
        <form role="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Champ Email */}
          <label htmlFor="email" className="text-left font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Champ Message */}
          <label htmlFor="message" className="text-left font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            className="border border-gray-300 p-3 rounded-lg h-32"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Bouton Envoyer */}
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-900 hover:bg-blue-700 text-gray-100 font-semibold px-6 py-2 rounded-md"
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
