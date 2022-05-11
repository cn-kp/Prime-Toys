import React from 'react';
import ToyItems from '../components/toyCards/toyCards';
import HomeHeader from '../components/homeHeader/homeHeader';

export default function Home(){
    return (
        <div className="homepage-container">
        <HomeHeader />
        <ToyItems />
        </div>
    )
}