import React from "react";
import { useQuery } from '@apollo/client'

import ProfileToyCards from '../components/profileToyCards/profileToyCards'

import "./profile.scss";

import { QUERY_USER } from '../utils/queries';

export default function Profile() {

  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data){
    user=data.user;
    console.log(user.listings)
  } else {
    user = []
  }

  return (
    <div className="profile-container">
      {user.length ? (
        <div className="user-cards">
          {user.listings.map((listing)=> (
            <ProfileToyCards 
            name={listing.name}
            description={listing.description}
            image={listing.image}
            category={listing.category}/>

          ))}
          </div>
      ) : (
        <div>loading </div>
      )
    }
      {/* <ProfileToyCards />
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
    } */}
    </div>
  );
}
