import React from "react";
import "../App.css";
import logo from "../assets/b.png"
const UserProfile = () => {
  return (
    <div className="page user-profile">
      <h1>User Profile</h1>
      <div className="profile-info">
        <img
          src={logo}
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="profile-details">
          <h2>Username: Finley Fox</h2>
          <p>Email: finley@focusfox.com</p>
          <p>Member Since: January 2023</p>
        </div>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default UserProfile;
