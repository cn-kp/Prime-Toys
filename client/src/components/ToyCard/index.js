import React from 'react';
import { Link } from "react-router-dom"

import './ToyCard.scss'

export default function ToyCard(card){ 

    const {
        _id,
        name,
        description,
        image,
        category
    } = card
    
    return(
        <div className="card-container">
            <div className="card">
                <div className="image-container">
                   <img
                        alt={name}
                        src={`/images/${image}`}
                    />
                </div>
                <div className="card-body">
                <p className="toy-name">{name}</p>
                <div className="toy-product">
                    <p>{description}</p>
                    <p>{category}</p>
                </div>
                <button className="contact-seller">Email seller</button>
                </div>
                </div>
        </div>
    )
}