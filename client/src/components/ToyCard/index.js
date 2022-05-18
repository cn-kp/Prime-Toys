import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_TOY } from '../../utils/mutations';

import './ToyCard.scss';

export default function ToyCard(card) {
  const { id, name, image, category, isFree, update, onClickRemove } = card;
  const [RemoveToy] = useMutation(REMOVE_TOY);

  const removeToyHandler = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
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
            onClick={onClickRemove}
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
          <div className="text-float-left">
            <p className="toy-description">{category}</p>
          </div>
          <div className="text-float-right">
            <p className="post-time">Posted 1 hr ago</p>
            {isFree ? (
              <p className="free-status">Free</p>
            ) : (
              <p className="free-status tradeable">Tradeable</p>
            )}
          </div>
        </div>
        <ProfileCardButtons />
      </div>
    </div>
  );
}
