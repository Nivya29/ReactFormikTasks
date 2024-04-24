import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Library Management System</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-title">Dashboard</Link>
        <Link to="/create" className="navbar-title">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
