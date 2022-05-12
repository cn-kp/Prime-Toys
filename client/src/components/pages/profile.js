import React from "react";
import "./profile.scss";
import ProfileToyCards from "../profileToyCards/profileToyCards"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-background-image">
        <img src="https://placehold.it/"></img>
      </div>
      <div className="userName">username</div>
      <div>
        <button className="add-listing-btn">Add a listing</button>
      </div>
      <div className="user-listings"><ProfileToyCards /></div>
    </div>
  );
}
