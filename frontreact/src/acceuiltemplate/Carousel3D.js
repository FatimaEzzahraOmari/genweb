import React, { useEffect } from 'react';
import './Carousel3D.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel3D = function (props) {
    let deg = 0; // Angle de rotation initial
    let nElements = 5; // Nombre d'éléments dans le carousel

    // Configure la position et la taille des éléments
    function responsiveDisplay() {
        let z; // Distance de translation en Z
        if (window.innerWidth < 600) {
            z = 100;
        } else if (window.innerWidth < 820) {
            z = 250;
        } else if (window.innerWidth < 1200) {
            z = 300;
        } else if (window.innerWidth < 1600) {
            z = 400;
        } else {
            z = 500;
        }

        const span = document.querySelectorAll('.box span');
        nElements = span.length;
        span.forEach((element, i) => {
            const angle = (360 / nElements) * i;
            element.style.transform = `rotateY(${angle}deg) translateZ(${z}px)`;
        });

        const box = document.querySelector('.box');
        box.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    }

    // Lance la rotation automatique
    function startAutoRotation() {
        const box = document.querySelector('.box');
        setInterval(() => {
            deg += 360 / nElements;
            box.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
        }, 6000); // Change toutes les 3 secondes
    }

    // Configuration initiale via useEffect
    useEffect(() => {
        responsiveDisplay();
        startAutoRotation();
        window.addEventListener('resize', responsiveDisplay);

        return () => {
            window.removeEventListener('resize', responsiveDisplay);
        };
    }, []);

    // Tourne vers la gauche
    function clickButtonLeft() {
        console.log('Left button clicked'); // Débogage
        deg -= 360 / nElements;
        console.log('New deg value:', deg);
        const box = document.querySelector('.box');
        box.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    }

    // Tourne vers la droite
    function clickButtonRight() {
        console.log('Right button clicked'); // Débogage
        deg += 360 / nElements;
        console.log('New deg value:', deg);
        const box = document.querySelector('.box');
        box.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    }

    return (
        <div className="carousel">
             <div className="carousel-header">
                
                
            </div>
            <div className="box">
                {/* Images du carrousel */}
                <span><img src="/images/c1.JPG" alt="1" /></span>
                <span><img src="/images/c2.JPG" alt="2" /></span>
                <span><img src="/images/c3.JPG" alt="3" /></span>
                <span><img src="/images/c4.JPG" alt="4" /></span>
                <span><img src="/images/c5.JPG" alt="5" /></span>
            </div>
            <div className="carousel-footer">
                 <h3>Créez des sites web modernes et élégants en quelques clics
                  grâce à nos designs professionnels.</h3>
            </div>
            <div onClick={clickButtonLeft} className="left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div onClick={clickButtonRight} className="right">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default Carousel3D;
