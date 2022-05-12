import React from "react";
import {useQuery} from "@apollo/client"
import "./profileToyCards.scss";
import { QUERY_USER_TOYS} from "../../utils/queries"

export default function Profile(){

  const {loading, data} = useQuery(QUERY_USER_TOYS);

  const userToys = data?.name || [];

    return(
      <div className="toy-user-listing">
      <div className="card-body">
        <div className="img-container">
          <img
            className="toy-image"
            src="https://media.npr.org/assets/img/2011/08/19/istock_000017061174small-6ca3bb7c8b6c768b92153932e822623a95065935.jpg"
          />
        </div>
        <h2 className="toy-title">toy title/name</h2>
        <p className="toy-description"> enter toy description here</p>
        <a href="#" className="btn contact-user"></a>
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