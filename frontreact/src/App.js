import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Acceuil from './acceuiltemplate/acceuil'; // Importation du composant Acceuil
/*import Templates from './acceuiltemplate/templates';*/ // Importation de la nouvelle page
import './acceuiltemplate/acceuil.css'; // Importation du fichier CSS
import axios from "axios"; // Assurez-vous d'importer Axios
import Template from "./acceuiltemplate/Template";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Assurez-vous que le jeton CSRF est inclus dans l'en-tête des requêtes AJAX

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/accueil" element={<Acceuil />} />  {/* Route pour la page d'accueil */}
        <Route path="/template" element={<Template />} />

      </Routes>
    </Router>
  );
}

export default App;
