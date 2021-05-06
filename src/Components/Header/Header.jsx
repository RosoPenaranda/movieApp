import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Static/img/logo.png";

const Header = (props) => {
  return (
    <header>
      <nav
        id="menu"
        className="navbar navbar-expand-lg fixed-top "
      >
        <div className="navbar-brand flex-grow-1 bd-highlight">
          <Link
            to="/"
            className="text-decoration-none"
          >
            <img src={Logo} alt="Logo Movies" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link texto_blanco text-decoration-none">
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addMovie"
                className="nav-link texto_blanco text-decoration-none"
              >
                Add Movie
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/topFive" className="nav-link texto_blanco text-decoration-none">
                Top 5
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/" className="dropdown-item">
                  Home
              </Link>
                <Link to="/addMovie" className="dropdown-item">
                  Add Movie
              </Link>
                <Link to="/topFive" className="dropdown-item">
                  Top 5
              </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
