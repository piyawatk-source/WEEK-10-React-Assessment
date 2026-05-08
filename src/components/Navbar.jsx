import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>
    </nav>
  );
}

export default Navbar;
