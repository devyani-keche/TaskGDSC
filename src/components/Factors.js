import React from 'react';
import { Link } from 'react-router-dom';
import './Factors.css';

const Factors = () => {
  return (
    <>
      <div className="factors-container">
        <h1 className="factors-title">Factors to Consider for Event Planning</h1>

        <div className="factors-box">
          <h2 className="factors-subtitle">Choosing the Date</h2>
          <div className="factors-content">
            <div className="factors-text-image">
              <div className="factors-text">
                <ol>
                  <li>
                    <b>Avoiding College Events:</b> <br />
                    It's crucial to choose a day when no major college events are happening, such as fests, sports events, or department activities. This ensures maximum attendance as students won't be torn between multiple engagements.
                  </li>

                  <li>
                    <b>College Schedule and Workshops:</b><br />
                    For example, this is Garba season, many students are preoccupied with college Garba workshops and preparations. Hosting an event during this time could result in low participation as students are more focused on these festivities. It’s better to avoid scheduling events until after major cultural events like Garba night.
                  </li>
                  <li>
                    <b>Duration of the Event:</b><br />
                    Consider how long the event will be while selecting the date and time. Is it a one-day event or a multi-day affair? The duration may influence your scheduling choices.
                  </li>

                  <li>
                    <b>Speakers:</b><br />
                    Confirm that your keynote speakers or presenters will be available. It's fundamental to have the event scheduled to accommodate the availability of the participants.
                  </li>

                  <li>
                    <b>Venue Availability:</b><br />
                    If you are having an in-person event, ensure that the venue is available on the selected date and time. If it's virtual, make sure the platform can handle the expected number of participants.
                  </li>

                  <li>
                    <b>First-Year Schedules:</b><br />
                    Since first-year students are more likely to attend, understanding their academic schedule is key. For example, Unit Test 1 is from 7th-10th October, planning the event after 10th would avoid exam stress and improve turnout.
                  </li>

                  <li>
                    <b>Avoiding Club Event Clashes:</b><br />
                    With multiple active clubs on campus, it's important to avoid clashes with other clubs' events. Coordination with club calendars prevents scheduling conflicts and ensures wider participation from students across different interests.
                  </li>

                  <li>
                    <b>Optimal Day Selection:</b><br />
                    Choose a day when most students have fewer classes to maximize attendance.
                  </li>

                  <li>
                    <b>Public Holidays:</b><br />
                    Avoid scheduling around public holidays when students might travel home. Choosing a regular weekend ensures more people stay on campus and are available to attend.
                  </li>
                </ol>
              </div>
              <div className="image-container">
                <img 
                  src="\date.webp" 
                  alt="Factors for Date Selection" 
                  className="event-image" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="factors-box">
          <h2 className="factors-subtitle">Choosing the Time</h2>
          <div className="factors-content">
            <div className="factors-text-image">
              <div className="factors-text">
                <ol>
                  <li>
                    <b>Avoid Class Timings:</b><br />
                    Choose a time that doesn’t clash with lectures or labs. Late afternoon or early evening is usually a safe time when most classes are over, and students are free.
                  </li>

                  <li>
                    <b>Recess:</b><br />
                    If exams are approaching, avoid scheduling events too late in the evening when students might prefer to study.
                  </li>

                  <li>
                    <b>Study Time Considerations:</b><br />
                    If exams are approaching, avoid scheduling events too late in the evening when students might prefer to study.
                  </li>

                  <li>
                    <b>Avoiding Event Fatigue:</b><br />
                    If other events are happening earlier in the day, avoid scheduling too close to them to prevent event fatigue.
                  </li>

                  <li>
                    <b>Timings:</b><br />
                    Scheduling very early or very late is not preferable for most students.
                    Starting an event around 3:00-4:00 pm is ideal for events that are less than 2 hours.
                  </li>
                </ol>
              </div>
              <div className="image-container">
                <img 
                  src="/time.webp" 
                  alt="Factors for Time Selection" 
                  className="event-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/">
        <button className="button">Home</button>
      </Link>
    </>
  );
};

export default Factors;
