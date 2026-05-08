import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

function AdminSection() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const handleSave = async () => {
    if (!name || !lastName || !position) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, position }),
      });
      setName("");
      setLastName("");
      setPosition("");
      fetchMembers();
    } catch (error) {
      console.error("Error creating:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchMembers();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="page">
      <h1>
        Generation Thailand
        <br />
        Home - Admin Section
      </h1>

      <div className="button-group">
        <Link to="/user" className="section-button">
          User Home Section
        </Link>
        <Link to="/admin" className="section-button active">
          Admin Home Section
        </Link>
      </div>

      <div className="form-section">
        <h3>Create User Here</h3>
        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <p className="table-label">Table 1</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.lastName}</td>
                <td>{m.position}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(m.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSection;
