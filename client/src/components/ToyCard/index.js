import React from 'react';
import { useMatch } from 'react-router-dom';

import './ToyCard.scss';

export default function ToyCard(card) {
  const { _id, name, description, image, category } = card;

  const ProfileCardButtons = () => {
    const match = useMatch('/profile');

    if (match) {
      return (
        <div className="card-footer">
          <button className="btn">Update</button>
          <button className="btn btn-outline">Remove</button>
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
