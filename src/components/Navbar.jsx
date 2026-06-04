function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#accueil">
          <img src="/images/logo.png" alt="Logo Infinity Space" className="logo-img" />
          Infinity Space
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#accueil">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#apropos">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bureau">Bureau</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#activites">Activités</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#avenir">À venir</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
