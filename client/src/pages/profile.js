import React from "react";
import { useQuery } from "@apollo/client";

import "./profile.scss";

import AddToy from "../components/AddToy";
import ToyCards from "../components/ToyCard";

import { QUERY_USER, QUERY_CATEGORY } from "../utils/queries";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;
  let username;

  if (data) {
    user = data.user.listings;
    username=data.user.username
  } else {
    user = [];
  }
  console.log(user)

  return (
    <div className="profile-container">
      <div className="greeting">
        <h1> Welcome back <span>{username}</span>!</h1>
      </div>
      <div className="add-toy-form-container">
        <AddToy />
      </div>

      {user.length ? (
        <div className="card-grid profile-card-grid">
          {user.map((listing) => (
            <ToyCards
              key={listing._id}
              id={listing._id}
              name={listing.name}
              description={listing.description}
              image={listing.image}
            />
          ))}
        </div>
      ) : (
        <>Add some Toys</>
      )}
    </div>
  );
}
