import React from "react";
import { useQuery } from '@apollo/client'

import ToyCard from '../components/ToyCard'

import "./profile.scss";

import { QUERY_USER_TOYS } from '../utils/queries';

export default function Profile() {

  const { loading, data } = useQuery(QUERY_USER_TOYS);

  const toys = data?.name || [];  


  return (
    <div className="profile-container">
      <div className="profile-background-image">
        <img src="https://placehold.it/" alt="placeholder"></img>
      </div>
      <div className="userName">username</div>
      <div>
        <button className="add-listing-btn">Add a listing</button>
      </div>
     {loading ? (
       <div> You have no toys listed... </div>
     ) : (
       <div>Toys cards should be loading here</div>
     )
    }
    </div>
  );
}
