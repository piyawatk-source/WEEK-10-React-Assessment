import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>
        Generation Thailand
        <br />
        React - Assessment
      </h1>
      <div className="button-group">
        <Link to="/user" className="section-button">
          User Home Section
        </Link>
        <Link to="/admin" className="section-button">
          Admin Home Section
        </Link>
      </div>
    </div>
  );
}

export default Home;
