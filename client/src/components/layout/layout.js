import React from "react";
import "./layout.scss";
import Navbar from "../navbar/navbar";

export default function Layout() {
  return (
    <>
      <div className="layout-container">
        <nav>
          <Navbar />
        </nav>
        <main>
          main - where we put our home page header/ additional features
        </main>
        <div className="sidebar">sidebar</div>
        <div className="toy-listings">where we load the cards</div>
        {/* <div className="extra-content">extra</div> */}
        <footer>footer</footer>
      </div>
    </>
  );
}
