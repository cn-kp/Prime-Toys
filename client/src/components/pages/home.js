import React from 'react';
import ToyItems from '../toyCards/toyCards';
import HomeHeader from '../homeHeader/homeHeader';

export default function Home(){
    return (
        <div className="homepage-container">
        <HomeHeader />
        <ToyItems />
        </div>
    )
}