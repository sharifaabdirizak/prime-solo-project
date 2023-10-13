import React, { useState } from 'react';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({

    //('Micheal Johnson', 'Michael@yahoo.com', '555-555-55555', 'password123'),
    username: 'Michael',
    fullName: 'Johnson',
    phoneNumber: 'Michael@yahoo.com',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
   
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="user-profile">
      <div className="user-profile-picture">
        <img src="placeholder-image.jpg" alt="User Avatar" />
      </div>
      <div className="user-profile-info">
        {isEditing ? (
          <>
            {['Username', 'Full Name', 'Contact Information'].map((field) => (
              <div key={field}>
                <label>{field}:</label>
                <input
                  type="text"
                  name={field.toLowerCase().replace(' ', '')}
                  value={userData[field.toLowerCase().replace(' ', '')]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {['Username', 'Full Name', 'Contact Information'].map((field) => (
              <div key={field}>
                <label>{field}:</label>
                <span>{userData[field.toLowerCase().replace(' ', '')]}</span>
              </div>
            ))}
          </>
        )}
        <div className="user-profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
