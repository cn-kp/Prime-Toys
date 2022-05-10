import React from "react";
import "./profile.scss";

export default function Profile(){
    return(
        <div className="user-toy-listing">
            <div className="listing-info">
                <h6> You posted a toy listing</h6>
            </div>
            <div className="listing-date">
                <span>created on:</span>
            </div>
            <img src = "http://placehold.it/" alt="placeholder img"></img>
        </div>
    )
}