import { Link } from "react-router-dom";

function RestHeader() {
  return (
    <div className="p-4 bg-dark text-white d-flex align-items-center justify-content-center">
      <span className="mx-2 display-3">🍣</span>
      <Link className="btn btn-secondary mx-2" to="/restaurant">Home</Link>
      <Link className="btn btn-secondary mx-2" to="/restaurant/reserve">Reserve</Link>
      <Link className="btn btn-secondary mx-2" to="/restaurant/reservations">Reservations List</Link>
    </div>
  )
}

export default RestHeader