import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page
    setError(null); // Réinitialise les messages d'erreur
    setSuccessMessage(null); // Réinitialise les messages de succès

    // Redirige directement vers la page d'accueil sans vérifier
    navigate("/accueil");

  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <h1>Welcome to GenWeb</h1>
        <p>Don't have an account?</p>
        <button className="blue-button" onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
      </div>
      <div className="login-section">
        <h2>User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              /*required*/
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             /*required*/
            />
            <i className="fa fa-lock password-icon"></i>
            <i
              className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} eye-icon`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember
            </label>
            <a href="#forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
