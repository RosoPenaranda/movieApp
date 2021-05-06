import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Link to="/" className="nav-link texto_blanco text-decoration-none">
          &copy;App Movies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
