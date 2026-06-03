function About() {
  return (
    <>
      <section id="apropos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">À propos du club</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm club-card">
                <div className="card-body">
                  <h3 className="h5 text-primary">Qui sommes-nous ?</h3>
                  <p>
                    Infinity Space est un club multi-activités de la Faculté des Sciences Ben M'Sik.
                    Il offre aux étudiants un espace pour apprendre, participer, créer des liens
                    et développer leurs passions dans plusieurs domaines.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm club-card">
                <div className="card-body">
                  <h3 className="h5 text-primary">Nos domaines</h3>
                  <ul className="mb-0">
                    <li>Sports et compétitions</li>
                    <li>Gaming</li>
                    <li>Informatique</li>
                    <li>Volontariat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm club-card">
                <div className="card-body">
                  <h3 className="h5 text-primary">Notre Vision</h3>
                  <p className="mb-0">
                    Créer une communauté inclusive où chaque étudiant trouve sa place.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm club-card">
                <div className="card-body">
                  <h3 className="h5 text-primary">Notre Mission</h3>
                  <p className="mb-0">
                    Offrir des activités variées, des événements enrichissants et un environnement
                    d'apprentissage collaboratif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Remerciements au parrain</h2>

          <div className="card shadow-sm col-md-8 mx-auto club-card">
            <div className="card-body text-center">
              <h3 className="h5 text-primary">Monsieur Aitdaoud Mohammed</h3>
              <p className="mb-0">
                Nous exprimons notre gratitude à Monsieur Aitdaoud Mohammed, parrain du club,
                pour son soutien continu et ses conseils précieux dans la réussite des initiatives
                sociales et académiques du club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
