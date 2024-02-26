// import React from 'react'
// import {Link} from 'react-router-dom'
// import { IoMdArrowDropdown } from "react-icons/io";
// import '../navbar.css'
// function Accueil() {
//   return (
//     <>
//     <nav className='navbar'>
//     <div>
//       <img className='logo' src="./images/LOGO_GEPIXBIM.png" alt="logo" />
//     </div>
//     <div>
//       <ul className='menu'>
//         <li>
//           <Link to='/'>Accueil</Link>
//         </li>
//       <li>
//         <Link to="/copropriete">Mon Copropriété <IoMdArrowDropdown /></Link>
//       </li>
//       <li>
//         <Link to='/comptabilite'>Comptabilite</Link>
//       </li>
//       <li>
//         <Link to='/assemble'>Assemble Benerale</Link>
//       </li>
//       <li>
//         <Link to='/evenement'>Evenement</Link>
//       </li>
//       </ul>
//     </div>
//     </nav>
//     </>
//   )
// }

// export default Accueil

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import '../EspaceClient/navbar.css'

function Accueil() {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <img className="logo" src="./images/LOGO_GEPIXBIM.png" alt="logo" />
        </div>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Mon Copropriété {dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </span>
              {dropdownOpen && (
                <div className="dropdown-content-vertical" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link to="/copropriete">Copropriété</Link>
                  <Link to="/batiment">Bâtiment</Link>
                  <Link to="/coproprietaire">Copropriétaire</Link>
                  <Link to="/lot">Lot</Link>
                  <Link to="/fournisseur">Fournisseur</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/comptabilite">Comptabilité</Link>
            </li>
            <li>
              <Link to="/assemble">Assemblée Générale</Link>
            </li>
            <li>
              <Link to="/evenement">Événement</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Accueil;
