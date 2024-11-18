// NavbarFooter.js
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';  // Importez FontAwesome ici
/*import { Link } from 'react-router-dom'; */ // Importez Link pour la navigation
import './acceuil.css';

// Navbar component
export const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1 className="title">
        Gen<span>Web</span>
      </h1>
      <ul className="menu">
      <li><a href="#ACCUEIL">ACCUEIL</a></li>
      <li><a href="#SERVICES">SERVICES</a></li>
      </ul>
    </div>
  );
};
export default Navbar;
// Footer component


