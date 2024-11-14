import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaUser, FaPhone, FaLock, FaEyeSlash, FaEye } from "react-icons/fa"; // Importer les icônes de Font Awesome
import "./Style1.css";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="page-container">
      <div className="left-section">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <div className="input-group">
            <i className="input-icon"><FaEnvelope /></i> {/* Icône pour l'email */}
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group password-container">
            <i className="input-icon"><FaLock /></i> {/* Icône pour le mot de passe */}
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
            />
            <i
              className="eye-icon"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </i> {/* Icône pour la visibilité du mot de passe */}
          </div>
          <div className="input-group">
            <i className="input-icon"><FaUser /></i> {/* Icône pour le nom */}
            <input type="text" placeholder="Full name" required />
          </div>
          <div className="input-group">
            <i className="input-icon"><FaPhone /></i> {/* Icône pour le téléphone */}
            <input type="tel" placeholder="Phone number" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="right-section">
        <p>Log in with your account to join us</p>
        <button className="blue-button" onClick={() => navigate("/")}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Signup;
