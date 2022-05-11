import React from "react";
import "./profile.scss";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-background-image">
        <img src="https://placehold.it/" alt="placeholder"></img>
      </div>
      <div className="userName">username</div>
      <div>
        <button className="add-listing-btn">Add a listing</button>
      </div>
      <div className="user-listings">{/* import user listing cards */}</div>
    </div>
  );
}
