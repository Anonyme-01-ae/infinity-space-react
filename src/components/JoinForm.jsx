import { useState } from "react";

function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormMessage("Veuillez remplir tous les champs.");
      setIsError(true);
      return;
    }

    if (!email.includes("@")) {
      setFormMessage("Veuillez entrer une adresse email valide.");
      setIsError(true);
      return;
    }

    setFormMessage("Merci " + name + ", votre demande a été enregistrée.");
    setIsError(false);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-3">Rejoindre Infinity Space</h2>

        <p className="text-center mb-4">
          Rejoignez Infinity Space, où chaque passion trouve son espace.
        </p>

        <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Votre nom"
              value={name}
              onChange={function (event) {
                setName(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
              value={email}
              onChange={function (event) {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Pourquoi voulez-vous rejoindre le club ?"
              value={message}
              onChange={function (event) {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>

          <p className={isError ? "text-danger text-center fw-bold mt-3" : "text-success text-center fw-bold mt-3"}>
            {formMessage}
          </p>
        </form>
      </div>
    </section>
  );
}

export default JoinForm;
