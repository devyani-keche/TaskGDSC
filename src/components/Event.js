import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'; 

const Event = () => {
  return (
    <>
      <div className="event-container">
        <h1 className="event-title">Code & Create: App Development Expo</h1>
        <div className="info">
          <div className="text-content">
            <h2>Why This Title is Appealing</h2>
            <p>
              App development sounds interesting in itself and everybody wants to do app development.
              The words "Code" and "Create" suggest active participation and creativity, encouraging attendees to engage hands-on in app development.
              It is easy for a participant to know what is happening by the title itself.
              There is sure to be an opportunity for everyone—be it a beginner or an expert developer—to improve their knowledge and also to collaborate with others.
            </p>
            <h2>What is App Development?</h2>
            <p>
              App development is the process of creating software applications that run on mobile
              devices, tablets, or desktops. It involves various stages, including planning, design,
              coding, testing, and deployment. With the rapid growth of the mobile app market, skills
              in app development are in high demand.
            </p>
            <h2>Why App Development?</h2>
            <p>
              Learning app development opens up numerous opportunities for innovation and career
              advancement. It enables individuals to transform their ideas into functional
              applications, potentially reaching millions of users. Additionally, it fosters
              problem-solving skills and creativity, essential traits in today's digital age.
            </p>
        <div>
          <Link to="/">
            <button className="button">Home</button>
          </Link>
        </div>
          </div>
          <div className="image-container">
            <img 
              src="https://t4.ftcdn.net/jpg/08/56/55/29/360_F_856552990_AJznEECU44rSHV6P0q1uEhQdCKWWNQCQ.jpg" 
              alt="App Development" 
              className="event-image" 
            />
            <img 
              src="https://t4.ftcdn.net/jpg/07/93/34/01/360_F_793340141_MgTbhxvo05fkLNa9LK4MfqTZQMXQRLJN.jpg" 
              alt="App Development" 
              className="event-image" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
