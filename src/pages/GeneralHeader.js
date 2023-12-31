import React from "react";
import "../css/generalHeader.css";

function GeneralHeader() {
  return (
    <div className="general_header">
      <div className="date-time-header">
        <div className="header-date">
          <p>Date :</p>
          <p style={{marginLeft: "10px"}}>18-12-2023</p>
        </div>
        <div className="header-time">
          <p>Time :</p>
          <p style={{marginLeft: "10px"}}>17:19:06</p>
          <p style={{marginLeft: "10px"}}>Europe/Madrid</p>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <h1>Club : <span>Padelko</span></h1>
        <div className="device-details">
            <p>Device UUID : <span>b14b6d1-c1226-4bf4-95ca-2c03cfdc7815</span></p>
        </div>
      </div>
    </div>
  );
}

export default GeneralHeader;
