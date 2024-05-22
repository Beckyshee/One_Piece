import "./navbar.scss";
import logo from "../assets/op.jpg";import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Episodes</a>
        <a href="/">Characters</a>
        <a href="/">Wiki</a>
        <a href="/">Merch</a>
      </div>
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaBell className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
