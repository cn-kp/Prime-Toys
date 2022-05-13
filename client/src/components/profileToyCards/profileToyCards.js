import React from "react";
import {useQuery} from "@apollo/client"
import "./profileToyCards.scss";

export default function ProfileToyCards(card){

    const {name, description, image} = card

    return(
      <div className="toy-user-listing">
      <div className="card-body">
        <div className="img-container">
          <img
            className="toy-image"
            src={`/images/${image}`} alt={name}
          />
        </div>
        <h2 className="toy-title">{name}</h2>
        <p className="toy-description">{description}</p>
        {/* <a href="#" className="btn contact-user"></a> */}
        <div className="listing-date">
          <span>created on:</span>
          <div>
            <button className="btn update-btn">update</button>
            <button className="btn remove-btn">remove</button>
          </div>
        </div>
      </div>
    </div>
    )
}