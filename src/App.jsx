import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserSection from "./pages/UserSection";
import AdminSection from "./pages/AdminSection";
import Owner from "./pages/Owner";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserSection />} />
        <Route path="/admin" element={<AdminSection />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </div>
  );
}

export default App;
