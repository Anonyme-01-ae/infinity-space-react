function Events({ title, events, bgLight }) {
  return (
    <section
      id={title === "Activités réalisées" ? "activites" : "avenir"}
      className={bgLight ? "py-5 bg-light" : "py-5"}
    >
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>

        <div className="row g-4">
          {events.map(function (event, index) {
            return (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm club-card">
                  {event.image && (
                    <img
                      src={event.image}
                      className="card-img-top event-img"
                      alt={event.title}
                    />
                  )}

                  <div className="card-body">
                    <span className="event-date">{event.date}</span>
                    <h3 className="h5 text-primary mt-2">{event.title}</h3>
                    <p>{event.description}</p>
                    <p className="fw-bold text-secondary mb-0">
                      Lieu : {event.place}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Events;
