function Hero() {
  return (
    <header id="accueil" className="hero text-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-8">
            <p className="text-uppercase fw-bold text-info">FSBM · 2025/2026</p>

            <h1 className="display-3 fw-bold">Infinity Space Club</h1>

            <p className="lead">
              Un espace infini pour des passions sans limites
            </p>

            <p>
              Infinity Space est un club universitaire multi-activités qui aide les étudiants
              à explorer leurs passions au-delà des études à travers le sport, le gaming,
              l'informatique et le volontariat.
            </p>

            <a href="#contact" className="btn btn-primary btn-lg">
              Rejoindre le club
            </a>
          </div>

          <div className="col-md-4 text-center">
            <img src="/images/logo.png" alt="Logo du club Infinity Space" className="hero-logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
