import { Link } from "react-router-dom";

function MainSelector() {
  return (
    <div className="d-flex justify-content-around bg-info">
      <Link className="btn btn-warning" to="/personal">Personal</Link>
      <Link className="btn btn-warning" to="/restaurant">Restaurant</Link>
    </div>
  )
}

export default MainSelector