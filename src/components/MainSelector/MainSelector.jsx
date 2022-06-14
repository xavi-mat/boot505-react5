import { Link } from "react-router-dom";
import './MainSelector.css';

function MainSelector() {
  return (
    <div className="floating-buttons">
      <Link className="floating-button" to="/personal">👨</Link>
      <Link className="floating-button" to="/restaurant">🍣</Link>
    </div>
  )
}

export default MainSelector