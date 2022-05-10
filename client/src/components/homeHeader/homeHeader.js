import React, { useState, useEffect } from "react";
import "./homeHeader.scss";

export default function homeHeader() {
  return (
    <div className="container">
      <div className="foreground-container">
        <div className="home-header">
          <span className="welcome">Welcome to our site!</span>
        </div>
        <div className="logo-picture">
          <div className="logo-background"></div>
        </div>
      </div>
    </div>
  );
}
