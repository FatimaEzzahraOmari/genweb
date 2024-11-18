// Footer component
import React from 'react';
import './acceuil.css';
import 'font-awesome/css/font-awesome.min.css'; 


export const Footer = () => {
  return (
  
    <footer>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>GenWeb is dedicated to providing an easy and fast way to create websites. Our mission is to help people create their digital presence effortlessly.</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-follow-us">
          <h3>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <a href="#" aria-label="GenWeb on Facebook">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a href="#" aria-label="Follow GenWeb on Instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="#" aria-label="Follow GenWeb on Twitter">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> contact@genweb.com</li>
            <li><i className="fas fa-phone"></i> +123 456 7890</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 GenWeb Street, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 GenWeb | All Rights Reserved</p>
      </div>
    </footer>

);
};
export default Footer;
