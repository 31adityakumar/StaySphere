import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img
          src={logo}
          alt="StaySphere Logo"
          className="logo-image"
        />
      </div>
    
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="fas fa-home home-icon" aria-hidden="true"></i> Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
