import React from 'react';
import { useQuery } from '@apollo/client';

import AddToy from '../components/AddToy';
import ToyCards from '../components/ToyCard';

import Login from './login';

import { QUERY_USER, QUERY_CATEGORY } from '../utils/queries';
import './profile.scss';

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user.listings;
    // console.log(user)
  } else {
    user = [];
  }

  const { loading: loading1, data: data1 } = useQuery(QUERY_CATEGORY);
  let categoryData;

  if (data1) {
    categoryData = data1.categories;
    // console.log(categoryData);
  } else {
    categoryData = [];
  }

  return (
    <div className="profile-container">
      {user.length ? (
        <div className="card-grid">
          <AddToy key={'key'} data={categoryData} />
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
