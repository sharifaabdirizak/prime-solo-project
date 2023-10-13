import React, { useState } from 'react';
   //('Micheal Johnson', 'Michael@yahoo.com', '555-555-55555', 'password123'),
function Settings() {
  const [formData, setFormData] = useState({
    username: 'michael_johnson',
    email: 'michael@yahoo.com',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings updated:', formData);
  };

  return (
    <div className="settings">
      <h2>User Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
