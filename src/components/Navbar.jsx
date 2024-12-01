import React from "react";
import "../App.css";
import logo from "../assets/b.png"
import background from "../assets/background-img.png"


const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar" style={{ backgroundImage: `url(${background})`}}>

      <button onClick={() => setCurrentPage("UserProfile")}>User Profile</button>
      <button onClick={() => setCurrentPage("TaskBurrow")}>The Task Burrow</button>
      <img src={logo} alt="fox logo" width="150px" className="logo"/>
      <button onClick={() => setCurrentPage("AboutTeam")}>About Our Team</button>
      <button onClick={() => setCurrentPage("Logout")}>Logout</button>
    </nav>
  );
};

export default Navbar;
