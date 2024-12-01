import React, { useState } from "react";
import "../App.css";

const UserProfileSettings = () => {
 
  const [userData, setUserData] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (userData.password !== userData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Save changes (here you can add an API call to save the data)
    setMessage("Profile updated successfully!");

    // Clear password fields after saving
    setUserData({ ...userData, password: "", confirmPassword: "" });
  };

  return (
    <div className="page user-profile-settings">
      <h1>Profile Settings</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UserProfileSettings;
