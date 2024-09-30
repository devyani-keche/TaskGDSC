import React from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <>
      <div className="form-container">
        <h2>Registration Form</h2>
        <h3>Objectives for Google Forms</h3>
        <ul className="objectives-list">
          <li>1. Facilitate the registration process.</li>
          <li>2. Collect insights from students regarding their familiarity with app development.</li>
          <li>3. Estimate the anticipated turnout based on initial registrations.</li>
        </ul>
        <h4>Form Fields:</h4>
        <ul className="form-fields-list">
          <li><strong>1. Name</strong></li>
          <li><strong>2. rknec Email ID</strong></li>
          <li><strong>3. Phone Number</strong></li>
          <li><strong>4. Year</strong></li>
          <li><strong>5. Branch</strong></li>
          <li><strong>6. Section</strong></li>
          <li><strong>7. Experience with App Development</strong></li>
        </ul>
        <li>Note: An event approval mail to be sent after submitting the form.</li>
      </div>
      <Link to="/"><button className='button'>Home</button></Link>
    </>
  );
};

export default RegistrationForm;