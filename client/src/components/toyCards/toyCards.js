import React from 'react';
import { Link } from "react-router-dom"

import './toyCards.scss'

export default function ToyCard(card){ 

    const {
        _id,
        name,
        description,
        image,
        category
    } = card
    
    return(
        <div className="main-container">
            <div className="toy-container">
                <div className="image-container">
                   <img
                        alt={name}
                        src={`/images/${image}`}
                    />
                </div>
                <p className="toy-name">{name}</p>
                <div className="toy-product">
                    <p>{description}</p>
                </div>
                <button className="contact-seller">Email seller</button>
            </div>
        </div>
    )
}