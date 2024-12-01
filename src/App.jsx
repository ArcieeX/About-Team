import "./App.css";
import React from "react";
import AboutTeam from "./AboutTeam.jsx";
import background from "./assets/background-img.png"
// import logo from "./assets/logo.png"


import Navbar from "./components/Navbar.jsx";
import UserProfile from "./components/UserProfile.jsx";
import TaskBurrow from "./components/TaskBurrow.jsx";

import Logout from "./components/Logout.jsx";

export default function App() {
 
  

  const [currentPage, setCurrentPage] = React.useState("AboutTeam");

  // // Function to render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case "UserProfile":
        return <UserProfile />;
      case "TaskBurrow":
        return <TaskBurrow />;
      case "AboutTeam":
        return <AboutTeam />;
      case "Logout":
        return <Logout />;
      default:
        return <AboutTeam />;
    }
  };


  return (
    <div className="App">
       <Navbar setCurrentPage={setCurrentPage} />
       <div className="content">{renderPage()}</div>
    </div>
  );
};
