import React from 'react';
import { useQuery } from '@apollo/client';

import './profile.scss';

import AddToy from '../components/AddToy';
import ToyCards from '../components/ToyCard';

import { QUERY_USER, QUERY_CATEGORY } from '../utils/queries';

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user.listings;
    console.log(user);
  } else {
    user = [];
  }

  return (
    <div className="profile-container">
      <div className="add-toy-form-container">
        <AddToy />
      </div>
      {user.length ? (
        <div className="card-grid">
          {data &&
            user.map((listing) => (
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
