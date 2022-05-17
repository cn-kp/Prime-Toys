import React from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";

import "./home.scss";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container-title">
          <h1 className="title">
            Prime <span>Toys</span>
          </h1>
          <h2 className="subtitle">Trade or donate your toys here</h2>
          <button>
            <NavLink to="/listings">Trade Now</NavLink>
          </button>
        </div>
      </section>

      <div>
        <h1>The One Stop Toy Site to donate or Trade your toys</h1>
        <h2>Connect with user near you to exchange your goods</h2>
      </div>
      <br></br>
      <div>
        <h1>Check out the recently listed toys</h1>
      </div>
    </>
  );
}
