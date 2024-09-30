import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sponsorship.css'; // Make sure to import the CSS file

const Sponsorship = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="factors-container">
        <h2 className="factors-title">Sponsorship Opportunities</h2>
        <p>
          We will try to seek sponsorship from businesses and industries that align with our mission and goals.
          Our target sponsors include:
        </p>
        <ul>
          <div className="sponsorship-factors">
            <div className="sponsor-box">Tech Companies</div>
            <div className="sponsor-box">Software Development Firms</div>
            <div className="sponsor-box">Educational Institutions</div>
            <div className="sponsor-box">Startups in the App Development Space</div>
            <div className="sponsor-box">Companies focusing on Innovation and Technology</div>
          </div>
        </ul>
        <h3 className="factors-subtitle">
          Our Proposal to Sponsors
        </h3>
        <div className="factors-box">
          <p>
            We invite you to be a part of our "Code & Create: App Development Expo." Your sponsorship will not only enhance the event but also provide you with:
          </p>
          <span
            onClick={handleToggleDetails}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            <button>Show Details</button>
          </span>
          {showDetails && (
            <ol>
              <li>Brand visibility during the event</li>
              <li>Opportunities to connect with talented students and future innovators</li>
              <li>Marketing materials distributed to participants</li>
              <li>Inclusion in our event promotions (social media, website, etc.)</li>
            </ol>
          )}
        </div>
        <div className="box">
          <img
            src="/draft.png"
            alt="draft"
          />
        </div>
      </div>
      <div>
        <Link to="/"><button className="button">Home</button></Link>
      </div>
    </>
  );
};

export default Sponsorship;
