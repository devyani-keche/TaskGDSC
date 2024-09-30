import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Promotion.css';

const Promotion = () => {
  const [infoText, setInfoText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionPoints = [
    {
      title: "Club’s Instagram Page",
      description: "Engage with our audience through interesting stories, teasers, and countdowns to build excitement around the event.",
    },
    {
      title: "Registration Desk at IT Square",
      description: "Set up a registration desk at IT Square. Make sure to obtain permission beforehand to promote the event effectively.",
    },
    {
      title: "WhatsApp Message",
      description: "Craft an attention-seeking message that highlights the event's key points and share it in official WhatsApp groups.",
    },
    {
      title: "Poster and Designs",
      description: "Our design team will create eye-catching posts and designs that visually communicate the essence of our event.",
    },
    {
      title: "Student Interactions in Classes",
      description: "Promote the event by visiting classrooms. Ensure to take prior permission from the faculty to engage with students directly.",
    },
  ];

  const handleSliderClick = (text) => {
    setInfoText(text);
    setTimeout(() => {
      setInfoText('');
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionPoints.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [promotionPoints.length]);

  return (
    <>
      <div className="promotion-container">
        <h2>Promotion and Publicity</h2>
        <p className="promotion-description">
          Innovative methods to promote our upcoming event:
        </p>

        <div className="slick-slider">
          <div
            className="slider-item"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {promotionPoints.map((point, index) => (
              <div key={index} className="slide" onClick={() => handleSliderClick(point.description)}>
                <h3>{point.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {infoText && (
          <div className="info-text">
            <p style={{ color: 'black' }}>{infoText}</p>
          </div>
        )}
        <img 
          src="/msg.png"  
          alt="pri" 
          style={{
            display: 'block',
            margin: '20px auto',
            width: '700px',
            height: 'auto',
          }} 
        />
      </div>
      <div>
        <Link to="/">
          <button className="button">Home</button>
        </Link>
      </div>
    </>
  );
};

export default Promotion;
