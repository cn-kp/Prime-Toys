import React from "react";
import { useQuery } from "@apollo/client";

import ProfileToyCards from "../components/profileToyCards/profileToyCards";
import ProfileHeader from "../components/profileHeader/profileHeader";

import "./profile.scss";

import { QUERY_USER, QUERY_CATEGORY } from "../utils/queries";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user.listings;
    // console.log(user)
  } else {
    user = [];
  }
  
  const { loading:loading1, data:data1 } = useQuery(QUERY_CATEGORY);
  let categoryData;

  if (data1) {
    categoryData = data1.categories;
    // console.log(categoryData);
  }else {
    categoryData = [];
  }

  return (
    <div className="profile-container">
      {user.length ? (
        <div className="user-cards">
          <ProfileHeader key={'key'} data={categoryData}/>
          {user.map((listing) => (
            <ProfileToyCards
              key={listing._id}
              name={listing.name}
              description={listing.description}
              image={listing.image}
            />
          ))}
        </div>
      ) : (
        <div>loading </div>
      )}
    </div>
  );
}
