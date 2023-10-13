import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//fix error on this page.
function LoginPage() {
  const history = useHistory();

  const [login, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginmData({
      ...formLoginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('login data submitted:', setLoginData);

   
    history.push('/dashboard'); 
  };

  return (
    <div className="login-page">
      <div className="center-content">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email or Username</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        
        <p>
          Don't have an account?{' '}
          <span
            className="link"
            onClick={() => {
              history.push('/signup'); 
            }}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
