import React from 'react';
import { Link } from 'react-router-dom';
import './IceBreakers.css'; 

const IceBreakers = () => {
  return (<>
    <div className="icebreakers-container">
      <h2 className="icebreakers-title">Ice-Breaker Activities and Event Timeline</h2>
      <p>
        Get ready to kick off your event with engaging ice-breaker activities that set the tone for a
        collaborative atmosphere! Here's how we plan to make it memorable:
      </p>
      <ul className="icebreakers-list">
        <li>
          <strong>Question Quiz:</strong> Test your knowledge about app development with fun quizzes,
          and win stickers for the correct answers!
        </li>
        <li>
          <strong>Interactive Challenges:</strong> The best page design will win a
          special prize, encouraging creativity and teamwork.
        </li>
        <li>
          <strong>Fun Interaction:</strong> Participate in group activities that foster communication
          and break down barriers among attendees.
        </li>
      </ul>
      <p>
        Below is the event timeline for our two-day workshop, designed to keep everyone engaged and
        ensure a smooth flow of activities.
      </p>
      

      <h3 className="timeline-title">14th October Timeline (3:00 PM - 5:00 PM)</h3>
      <table className="event-timeline-horizontal">
        <tbody>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Introduction</td>
            <td>Welcome speech and overview of the app development workshop.</td>
          </tr>
          <tr>
            <td>3:15 PM</td>
            <td>Ice Breakers</td>
            <td>Ice-breaking quiz on what has students already know.</td>
          </tr>
          <tr>
            <td>3:30 PM</td>
            <td>Segment 1 - Basics of App Development</td>
            <td>Introduction to app development concepts, tools, and best practices.</td>
          </tr>
          <tr>
            <td>3:50 PM</td>
            <td>First App Setup</td>
            <td>Hands-on demonstration to set up the first app development environment.</td>
          </tr>
          <tr>
            <td>4:45 PM</td>
            <td>Wrap-Up</td>
            <td>Summary of the day's activities and a sneak peek of the next day.</td>
          </tr>
        </tbody>
      </table>

  
      <h3 className="timeline-title">15th October Timeline (3:00 PM - 5:00 PM)</h3>
      <table className="event-timeline-horizontal">
        <tbody>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Segment 2 - Advanced App Development</td>
            <td>In-depth discussion of advanced app development concepts and best practices.</td>
          </tr>
          <tr>
            <td>3:40 PM</td>
            <td>Interactive Q&A</td>
            <td>Participants can ask questions and clarify their doubts.</td>
          </tr>
          <tr>
            <td>4:00 PM</td>
            <td>Hands-On Challenge</td>
            <td>Participants work in teams to create an app page, promoting creativity and teamwork.</td>
          </tr>
          <tr>
            <td>4:50 PM</td>
            <td>Vote of Thanks & Conclusion</td>
            <td>Concluding remarks, thanking participants and sponsors.</td>
          </tr>
        </tbody>
      </table>

    </div>
      <div>
        <Link to="/">
        <button className="button">Home</button>
        </Link>
      </div></>
  );
};

export default IceBreakers;
