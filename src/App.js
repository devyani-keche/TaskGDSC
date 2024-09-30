import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Event from './components/Event';
import Factors from './components/Factors';
import Permissions from './components/Permissions';
import Sponsorship from './components/Sponsorship';
import IceBreakers from './components/IceBreakers';
import RegistrationForm from './components/RegistrationForm';
import Promotion from './components/Promotion';
import Steps from './components/Steps';

function App() {
  const EventText = `Suggesting an appealing and memorable name for the event.`;

  const FactorsText = `Listing the things I'll think about when choosing the event's date and time.`;

  const PermissionsText = `
    Providing a list of all the permissions I believe are necessary to conduct the event.
    Writing an application to take all the required permissions (To whom we will write the application,
    subject, points that should be mentioned in the application, and all the signatures we will need for
    submitting the application).
  `;

  const sponsorshipContent = `
    Writing about what industry or business we will plan to target for sponsorship.
    Drafting a mail (formal) to the sponsors explaining our plans, requesting their assistance, and
    highlighting what we can offer them in return.
  `;

  const iceBreakersContent = `
    Planning some in-session ice-breaker activities and outlining the event timeline, including its introduction, various segments, and conclusion with a vote of thanks.
  `;

  const formDetailsContent = `
    Providing a template form to gather specific information we would gather through the form for this event.
  `;

  const promotion = `Write a message for the publicity of the event. Explore more innovative methods for promoting the event.`;

  const steps = `What steps should be taken for the event day arrangements?`;

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/event" element={<Event />} />
          <Route path="/factors" element={<Factors />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/icebreakers" element={<IceBreakers />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/steps" element={<Steps />} />

          <Route path="/" element={
            <>
              <Link to="/event">
                <Section title="Event Name and About?" content={EventText} />
              </Link>
              <Link to="/factors">
                <Section title="Factors to Consider When Choosing the Date and Time?" content={FactorsText} />
              </Link>
              <Link to="/permissions">
                <Section title="Permissions and Procedures?" content={PermissionsText} />
              </Link>
              <Link to="/sponsorship">
                <Section title="Sponsorship Opportunities?" content={sponsorshipContent} />
              </Link>
              <Link to="/icebreakers">
                <Section title="Ice-Breaker Activities and Event Timeline?" content={iceBreakersContent} />
              </Link>
              <Link to="/registration">
                <Section title="Registration Form Details?" content={formDetailsContent} />
              </Link>
              <Link to="/promotion">
                <Section title="Promotion and Publicity?" content={promotion} />
              </Link>
              <Link to="/steps">
                <Section title="D-day Arrangements?" content={steps} />
              </Link>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
