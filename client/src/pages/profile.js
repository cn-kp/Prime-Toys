import React from 'react';
import { useQuery } from '@apollo/client';

// import ProfileToyCards from '../components/profileToyCards/profileToyCards';
import ToyCards from '../components/ToyCard';

import Login from './login';

import './profile.scss';

import { QUERY_USER } from '../utils/queries';

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user.listings;
  } else {
    user = [];
  }

  return (
    <div className="profile-container">
      {user.length ? (
        <div className="card-grid">
          {user.map((listing) => (
            <ToyCards
              key={listing._id}
              name={listing.name}
              description={listing.description}
              image={listing.image}
            />
          ))}
        </div>
      ) : (
        <div className="sign-in-prompt">
          <Login />
        </div>
      )}
    </div>
  );
}
