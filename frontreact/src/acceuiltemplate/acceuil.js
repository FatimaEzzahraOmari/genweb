import React from 'react';
import Typed from 'typed.js';
import { Navbar } from './Navbar'; // Importez Navbar et Footer ici
import { useNavigate } from 'react-router-dom';
import './acceuil.css';
import Carousel3D from './Carousel3D';
import { Footer } from './Footer'; 





function Acceuil() {
  const navigate = useNavigate();

  React.useEffect(() => {
    new Typed('.auto-typing', {
      strings: ['to GenWeb', ',Design. Expand. Publish', ',Turn your ideas into sites'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });
  }, []);

  return (
    <div className="container">
      <div class="homeNav"> 
         <Navbar />  {/* Utilisez le composant Navbar ici */}

        <div className="home">
          <h1>
            Welcome <span className="auto-typing"></span><br />
          </h1>
          <p className="styled-paragraph">
             Create your online presence with elegance and simplicity.<br />
             effortlessly. Let us turn your ideas into a unique website,<br />
             tailor-made and ready to shine.


          </p>
          <button type="button" onClick={() => navigate("/template")}>Let's get started</button>
        </div>
      </div>
      <div className='carroussel'> 
        <Carousel3D />
            
      </div>
      <div> 
        
        <Footer />  {/* Utilisez le composant Footer ici */}
      </div>
    </div>


  );
}

export default Acceuil;
