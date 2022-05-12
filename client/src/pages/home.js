import React from 'react';
import { useQuery } from '@apollo/client'

import './home.scss'

import ToyCard from '../components/ToyCard';
import HomeHeader from '../components/homeHeader/homeHeader';

import { QUERY_ALL_TOYS } from '../utils/queries';

export default function Home(){

    const { loading, data } = useQuery(QUERY_ALL_TOYS);
    let toys;

    //If there are no toys, return empty array
    if (data) {
        toys = data.toys
    } else {
        toys = [];
    }

    

    return (
        <>
        <div>Content</div>
        <div className="container">
     
        {toys.length ? (
           <div className="container-card">
            {toys.map((toy) => (
                <ToyCard 
                key={toy._id}
                _id={toy._id}
                name={toy.name}
                description={toy.description}
                image={toy.image}
                category={toy.category.name}
                />
            ))}
            </div>
        ) : (
            <div>Loading ... </div>
        )
    }

        </div>
        </>
    )
}