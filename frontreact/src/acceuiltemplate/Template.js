import React, { useState } from 'react';
import Navbar from './Navbar'; 
import { Footer } from './Footer';
import './Template.css'; 

export const Template = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlides, setCurrentSlides] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [templateTitle, setTemplateTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); 

   // Naviguer vers l'image précédente

   const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentSlides.length - 1 : prevIndex - 1
    );
  };

  // Naviguer vers l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour ouvrir la modale avec les slides associés
  const openModal = (slides, title) => {
    setCurrentSlides(slides);
    setMainImage(slides[0]);// Première image par défaut
    setCurrentIndex(0); // Réinitialise l'index de l'image
    setTemplateTitle(title);
    setShowModal(true);
  };

  // Fonction pour changer l'image principale
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setShowModal(false);
    setCurrentSlides([]);
    setMainImage('');
  };

  
  // Données des cartes avec leurs slides
  const templates = [
    {
      title: 'Startup',
      image: '/images/c1.JPG',
      slides: ['/images/slide2a.JPG', '/images/slide2b.JPG', '/images/slide2c.JPG'],
    },
    {
      title: 'Argon',
      image: '/images/c5.JPG',
      slides: ['/images/slide2a.JPG', '/images/slide2b.JPG', '/images/slide2c.JPG'],
    },
    {
      title: 'Landy',
      image: '/images/c3.JPG',
      slides: ['/images/c3.JPG', '/images/c3a.JPG','/images/c3b.JPG', '/images/c3f.JPG','/images/c3j.JPG'],
    },
  ];

  return (
    <>
      <div className="template-container">
        <Navbar />

        {/* En-tête principal */}
        <header className="header-section">
          <h1 className="main-title">INVEST IN YOUR FUTURE</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>

        {/* Section des fonctionnalités */}
        <section className="features-section">
          <h2 className="section-title">Templates</h2>
          <div className="features-container">
            {templates.map((template, index) => (
              <div
                key={index}
                className="feature-card"
                onClick={() => openModal(template.slides, template.title)}
              >
                <div className="image-wrapper">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="feature-image"
                  />
                </div>
                <h3 className="template-title">{template.title}</h3>
              </div>
            ))}
          </div>
        </section>

        
           {/* Modale */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title">{templateTitle}</h2>

              <div className="modal-body">
                {/* Image principale à gauche */}
                <div className="main-image-container">
                  <button className="nav-btn left" onClick={prevSlide}>
                    &lt;
                  </button>
                  <img
                    src={currentSlides[currentIndex]}
                    alt="Template Preview"
                    className="main-image"
                  />
                  <button className="nav-btn right" onClick={nextSlide}>
                    &gt;
                  </button>
                </div>

                {/* Miniatures en bas */}
                <div className="thumbnails-container">
                  {currentSlides.map((slide, idx) => (
                    <img
                      key={idx}
                      src={slide}
                      alt={`Slide ${idx + 1}`}
                      className={`thumbnail ${
                        idx === currentIndex ? 'active' : ''
                      }`}
                      onClick={() => setCurrentIndex(idx)}
                    />
                  ))}
                </div>
              </div>

              {/* Bouton Personnaliser */}
              <div className="customize-btn-container">
                <button className="customize-btn">Personnaliser Template</button>
              </div>

              {/* Bouton Fermer */}
              <button className="close-btn" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Template;
