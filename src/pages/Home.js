import React from "react";
import "../css/home.css";
import GeneralHeader from "./GeneralHeader";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        {/* Left Navigation Panel  */}
        <div className="nav-panel">
          <div className="nav-inside-wrapper">
            {/* Logo Section */}
            <div className="logo">
              <h1>
                LO<span>GO</span>
              </h1>
            </div>
            {/* Logo Section */}

            {/* Navigation Panel's Buttons Section */}

            <div className="nav-btn-wrapper">
              <div className="btn-wrapper">
                <BsGrid1X2Fill className="btn-icon" />
                <button className="nav-btn">Configurations</button>
              </div>
              <div className="btn-wrapper">
                <FaLightbulb className="btn-icon" />
                <button className="nav-btn">Lights Status</button>
              </div>
              <div className="btn-wrapper">
                <BsDoorOpenFill className="btn-icon" />
                <button className="nav-btn">Doors Status</button>
              </div>
            </div>

            {/* Navigation Panel's Buttons Section */}

            {/* Logout */}

            <div className="logout-btn-wrapper">
              <MdOutlineLogout className="logout-btn-icon" />
              <button className="nav-logout-btn">Logout</button>
            </div>

            {/* Logout */}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
            {/* Header Section */}
            <div className="right-header">
              < GeneralHeader/>
            </div>
            {/* Header Section */}
        </div>
      </div>
    </div>
  );
}

export default Home;
