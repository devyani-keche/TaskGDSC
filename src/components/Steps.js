import React from 'react';
import { Link } from 'react-router-dom';
import './Steps.css'; 

const Steps = () => {
  return (<>
    <div className="steps-container">
      <h2>D-Day Arrangements</h2>
      <p className="steps-description">Ensure a successful event day with these essential arrangements:</p>
      
      <div className="steps-list">
        <div className="step-item">
          <h3>1. Venue Setup</h3>
          <p>Make sure the venue is decorated, seating arrangements are in place, and all necessary equipment is ready.</p>
        </div>
        <div className="step-item">
          <h3>2. Registration Desk</h3>
          <p>Set up a registration desk to welcome attendees, provide badges, and hand out event materials.</p>
        </div>
        <div className="step-item">
          <h3>3. Technical Check</h3>
          <p>Conduct a technical check of all audio-visual equipment to ensure everything is functioning smoothly.</p>
        </div>
        <div className="step-item">
          <h3>4. Event Schedule</h3>
          <p>Prepare and distribute a detailed event schedule to all team members and participants.</p>
        </div>
        <div className="step-item">
          <h3>5. Communication Plan</h3>
          <p>Establish a communication plan to keep everyone updated throughout the event.</p>
        </div>
        <div className="step-item">
          <h3>6. Securing Technical Arrangements</h3>
          <p>Ensure all technological devices, including audio-visual systems, microphones, projectors, and screens, are functioning optimally.</p>
        </div>
        <div className="step-item">
          <h3>7. Organizing Event Materials</h3>
          <p>Ensure prompt accessibility of event materials, such as informative handouts and brochures, at designated locations.</p>
        </div>
        <div className="step-item">
          <h3>8. Preparing Presenters</h3>
          <p>Ensure the comfort and readiness of all speakers with their presentations primed and speaking order clear.</p>
        </div>
        <div className="step-item">
          <h3>9. Live Social Media Updates</h3>
          <p>Assign someone to manage real-time social media updates and engage with the audience throughout the event.</p>
        </div>
      </div>

    </div>
      <div className="navigation">
        <Link to="/"><button className="button">Home</button></Link>
      </div></>
  );
};

export default Steps;
