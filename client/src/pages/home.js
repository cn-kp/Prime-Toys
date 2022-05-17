import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";

import ToyCard from "../components/ToyCard";
import { QUERY_ALL_TOYS } from "../utils/queries";

import "./home.scss";

export default function Home() {
  const { loading, data, error } = useQuery(QUERY_ALL_TOYS);
  const toys = data?.toys || [];
  const toy = toys.slice(-3);

  return (
    <>
      <section className="home">
        <div className="hero-image">
          <div className="container-title">
            <h1 className="title">
              Prime <span>Toys</span>
            </h1>
            <h2 className="subtitle">Trade or donate your toys here</h2>
            <div className="btn-container">
              <button>
                <NavLink to="/listings">Trade Now</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="about-prime-toys">
        <div>
          <h1>The One Stop Toy Site to donate or Trade your toys</h1>
          <h2>Connect with user near you to exchange your goods</h2>
        </div>
        <h1>The One Stop Toy Site to donate or Trade your toys</h1>
      </div>
      <br></br>
      <div className="recent-container">
        <h1>Check out the recently listed toys</h1>
        {toy.length ? (
          <div className="card-grid recent-card">
            {toy.map((toy) => (
              <ToyCard
                key={toy._id}
                isFree={toy.isFree}
                _id={toy._id}
                name={toy.name}
                description={toy.description}
                image={toy.image}
                category={toy.category.name}
              />
            ))}
          </div>
        ) : (
          <div> There are no current Listings</div>
        )}
      </div>
    </>
  );
}
