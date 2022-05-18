import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import './profile.scss';

import AddToy from '../components/AddToy';
import ToyCards from '../components/ToyCard';

import { QUERY_USER, QUERY_CATEGORY } from '../utils/queries';
import { REMOVE_TOY } from '../utils/mutations';

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  const [RemoveToy] = useMutation(REMOVE_TOY);
  const user = data?.user.listings || [];
  const username = data?.user.username || '';

  const [removeToyState, setRemoveToyState] = useState(false);
  const [listingsState, setListingsState] = useState(user);

  useEffect(() => {
    if (user) {
      setListingsState(user);
    }
  }, [user]);

  // console.log(user);

  // useEffect(() => {
  //   if (removeToyState) {
  //     setListingsState(listingsState);
  //   }
  //   setRemoveToyState(false);
  // }, [listingsState, removeToyState]);

  const removeToyHandler = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    try {
      const removeToyMutation = await RemoveToy({
        variables: {
          id: value,
        },
      });

      setListingsState(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-container">
      <div className="greeting">
        <h1>
          {' '}
          Welcome back <span>{username}</span>!
        </h1>
      </div>
      <div className="add-toy-form-container">
        <AddToy />
      </div>
      {listingsState.length ? (
        <div className="card-grid profile-card-grid">
          {listingsState.map((listing) => (
            <ToyCards
              key={listing._id}
              id={listing._id}
              name={listing.name}
              description={listing.description}
              image={listing.image}
              onClickRemove={removeToyHandler}
            />
          ))}
        </div>
      ) : (
        <div className="no-listings">
          <h1 className="list-toys-prompt">
            Listing some toys to get started or
          </h1>
          <button className="btn view-listings">View Current Listings</button>
        </div>
      )}
    </div>
  );
}
