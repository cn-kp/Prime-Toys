import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import "./listings.scss";

import ToyCard from "../components/ToyCard";

import { QUERY_ALL_TOYS } from "../utils/queries";
// import { DangerousChangeType } from "graphql";

export default function Listings() {
  const [activeFilter, setActiveFilter] = useState("all");

  // const fetchToys = async ()=> {

  // }
  const { loading, data,error } = useQuery(QUERY_ALL_TOYS);
  const toys  = data?.toys || [];
  const [toyData, setToyData] = useState(toys);
  
  useEffect(()=>{
    if (data){
      setToyData(data.toys)
    }
  },[data])

  console.log(toyData);

  // console.log(toyData);
  const handleFilter = function (event) {
    const { value } = event.target;
    setActiveFilter(value);
    let toy = [];
    if (value === "all") {
      setToyData(toys);
    } else if (value === "true") {
      for (let i = 0; i < toys.length; i++) {
        if (toys[i].isFree === true) {
          toy.push(toys[i]);
        }
        setToyData(toy);
      }
    } else if (value === "false") {
      for (let i = 0; i < toys.length; i++) {
        if (toys[i].isFree === false) {
          toy.push(toys[i]);
        }
        setToyData(toy);
      }
    }
  };

  return (
    <>
      <div className="filter-container">
        <h2>Select a Listing Type</h2>
        <button value="all" onClick={handleFilter}>
          All Listing
        </button>
        <button value="true" onClick={handleFilter}>
          Free
        </button>
        <button value="false" onClick={handleFilter}>
          Trade
        </button>
      </div>
      <section className="wrapper--listings">
        {toyData.length ? (
          <div className="card-grid">
            {toyData.map((toy) => (
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
          <div> There are no current Listing / select a type of listing </div>
        )}
      </section>
    </>
  );
}
