import React from "react";
import "../App.css";

const Logout = () => {
  const handleLogout = () => {
    // Placeholder for logout functionality
    alert("You have been logged out!");
  };

  return (
    <div className="page logout">
      <h1>Logout</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Confirm Logout
      </button>
    </div>
  );
};

export default Logout;
