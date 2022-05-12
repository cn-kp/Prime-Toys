import React from "react";
import { useQuery } from '@apollo/client'

import ProfileToyCards from '../components/profileToyCards/profileToyCards'

import "./profile.scss";

import { QUERY_USER_TOYS } from '../utils/queries';

export default function Profile() {

  const { loading, data } = useQuery(QUERY_USER_TOYS);

  const userToys = data?.toys || [];  

  return (
    <div className="profile-container">
      {userToys.length ? (
        <div className="user-cards">
          {userToys.map((toy)=> (
            <ProfileToyCards 
            name={toy.name}
            description={toy.description}
            image={toy.image}
            category={toy.category}/>

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
