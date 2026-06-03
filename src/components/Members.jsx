function Members({ members }) {
  return (
    <section id="bureau" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Notre Bureau</h2>

        <div className="row g-4">
          {members.map(function (member, index) {
            return (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm text-center club-card">
                  <div className="card-body">
                    <h3 className="h5 text-primary">{member.name}</h3>
                    <p className="fw-bold text-secondary mb-0">{member.role}</p>
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

export default Members;
