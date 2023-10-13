import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import './LandingPage.css';


import SignUp from '../SignUp/SignUp';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h1>Welcome to Mindful Echoes</h1>
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Imagine having a personal coach in your pocket, ready to help boost your motivation and confidence throughout the day. Mindful echoes give users a dose of positivity, designated to shape their mindset and improve overall happiness. Mindful echoes provide daily uplifting affirmations, personalized goal journaling, and set the users on a path to success and positivity.
          </p>
          <p>
            Your daily source of inspiration and self-reflection.
          </p>
        </div>
        <div className="buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/signup" className="signup-button">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
