import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './navbar.css'

function Footer() {
  return (
    <>
    <footer>
      <div className="footer-section">
        <div>
        <img className="logo1"  src="./images/LOGO_GEPIXBIM.png" alt="logo" />
        <div className="paralogo">
          <p>GEPIXBIM Géomètre Expert</p>
          <p>
            5 Rue Bourgerue,
            <br /> 27590 Pitres
          </p>
        </div>
        </div>
      </div>

      <div className="footer-section">
        <h5 className="parafooter">Gepixbim syndic</h5>
        <ul>
          <li>
            <Link to="/">Nos Partenaires</Link>
          </li>
          <li>
            <Link to="/">Nos tarifs</Link>
          </li>
          <li>
            <Link to="/">Nos offres</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h5 className="parafooter">Pédagogiques</h5>
        <ul>
          <li>
            <Link to="/">Guide de la copropriété</Link>
          </li>
          <li>
            <Link to="/">Guide de la copropriété</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h5 className="parafooter">Suivez-nous sur</h5>
        <ul className="icon">
          <li><Link to="/"><FaFacebook /></Link></li>
          <li><Link to="/"><FaLinkedin /></Link></li>
          <li><Link to="/"><FaYoutube /></Link></li>
          <li><Link to="/"><FaXTwitter /></Link></li>
          <li><Link to="/"><FaSquareInstagram /></Link></li>
        </ul>
      </div>

      
    </footer>
    <div className="footerone">
    <p>Mentions légales & CGU</p>
    <p>Politique de la confidentialité</p>
  </div>
  </>
    
  );
}

export default Footer;
