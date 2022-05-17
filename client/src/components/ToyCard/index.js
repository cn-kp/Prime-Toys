import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_TOY } from '../../utils/mutations';

import './ToyCard.scss';

export default function ToyCard(card) {
  const { id, name, description, image, category } = card;
  // console.log(id);
  const [RemoveToy] = useMutation(REMOVE_TOY);

  const removeToyHandler = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    try {
      const removeToyMutation = await RemoveToy({
        variables: {
          id: value,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const ProfileCardButtons = () => {
    const match = useMatch('/profile');

    if (match) {
      return (
        <div className="card-footer">
          <button className="btn">Update</button>
          <button
            className="btn btn-outline"
            name="id"
            value={id}
            onClick={removeToyHandler}
          >
            Remove
          </button>
        </div>
      );
    } else {
      return (
        <div className="card-footer">
          <button className="btn">Details</button>
          <button className="btn btn-outline">Trade</button>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img alt={name} tabIndex={0} src={`/images/${image}`} />
      </div>

      <div className="card-body">
        <div className="card-text">
          <p className="toy-name">{name}</p>
          <p className="toy-description">{category}</p>
        </div>
        <ProfileCardButtons />
      </div>
    </div>
  );
}
