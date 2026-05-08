import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

function UserSection() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="page">
      <h1>
        Generation Thailand
        <br />
        Home - User Section
      </h1>

      <div className="button-group">
        <Link to="/user" className="section-button active">
          User Home Section
        </Link>
        <Link to="/admin" className="section-button">
          Admin Home Section
        </Link>
      </div>

      <div className="table-wrapper">
        <p className="table-label">Table 1</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.lastName}</td>
                  <td>{m.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserSection;
