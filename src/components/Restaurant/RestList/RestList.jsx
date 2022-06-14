import RestHeader from "../RestHeader/RestHeader"

function RestReserve({ db }) {
  db.loadReservations();
  let reservations;
  if (db.reservations.length) {
    reservations = db.reservations.map((r, i) => (
      <div key={i} className="card mb-3">
        <div className="card-header">
          <div className="d-md-flex justify-content-between">
            <div>
              Name: <strong>{r.name}</strong>. #of Guests: {r.guests}. Type: {r.type}.
            </div>
            <div>
              Date: {r.date}. Time: {r.time}
            </div>
          </div>
        </div>
        {r.message ? (<div className="card-body">Message: {r.message}</div>) : ''}
      </div>
    ))

  } else {
    reservations = (<div className="text-muted">(Empty list)</div>);
  }
  return (
    <>
      <RestHeader />
      <div className="container">
        <h1>Reservations List</h1>
        {reservations}
      </div>
    </>
  )
}

export default RestReserve