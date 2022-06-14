import { Link } from "react-router-dom";

function PersNav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/personal">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/personal/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/personal/other">Messages List</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default PersNav