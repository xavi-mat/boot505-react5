import { Link } from "react-router-dom";
import './MainCenter.css';

function MainCenter() {
  return (
      <div className="centered display-1 d-flex flex-column align-items-center">
        <h1>Welcome</h1>
        <div>
          <Link className="normal-button" to="/personal">👨</Link>
          <Link className="normal-button" to="/restaurant">🍣</Link>
        </div>
      </div>
  )
}

export default MainCenter