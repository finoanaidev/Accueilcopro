import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="./images/LOGO_GEPIXBIM.png" alt="logo" />
      <ul className="menu">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/syndic">Syndic</Link>
        </li>
        <li>
          <Link to="/partenaire">Partenaires</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <BsFillTelephoneFill className="telephone-icon" />
          <span className="telephone-number">+33 232 48 20 71</span>
        </li>
      </ul>

      {/* Rediriger vers la page AccueilSyndic */}
      <Link to="/login" className="layout">
        <FaUserCircle />
        <span>Espace Client</span>
      </Link>
    </nav>
  );
}

export default Navbar;