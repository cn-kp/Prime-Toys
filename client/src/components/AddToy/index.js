import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TOY } from "../../utils/mutations";
import { useQuery } from "@apollo/client";
import Category from "../CategoryId";
import Condition from "../ConditionId"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./AddToy.scss";

import { QUERY_CATEGORY, QUERY_CONDITION } from "../../utils/queries";

const AddToy = (data) => {
  const [categoryName, setCategoryName] = useState({ category: "" });
  const [toyData, setToyData] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    condition: "",
  });
  const addNotify = () => {
    toast("listing added successfully")
  }
  const errorNotify = () => {
    toast("listing error, please select all fields")
  }
  const [isFree, setIsFree] = useState(true);

  const { loading: loading1, data: data1 } = useQuery(QUERY_CATEGORY);
  let categoryData;

  if (data1) {
    categoryData = data1.categories;
  } else {
    categoryData = [];
  }

  const {loading:loading2, data:data2}=useQuery(QUERY_CONDITION)
  let conditionData;
  if (data2) {
    conditionData = data2.conditions;
  } else {
    conditionData = [];
  }

  const handleIsFree = (event) => {
    setIsFree(!isFree);
  };

  const handleAddToy = (event) => {
    const { name, value } = event.target;
    setToyData({ ...toyData, [name]: value });
  };

  const [AddToy] = useMutation(ADD_TOY);

  const submitToyHandler = async (event) => {
    event.preventDefault();
    try {
      const toyMutationResponse = await AddToy({
        variables: {
          input: {
            name: toyData.name,
            description: toyData.description,
            image: toyData.image,
            category: { _id: toyData.category },
            isFree: isFree,
            condition: {_id: toyData.condition}
          },
        },
      });
      addNotify()
    } catch (err) {
      console.error(err);
      errorNotify()

    }

    setToyData({ name: "", description: "", image: "", category: "", condition: "" });
  };

  return (
    <div className="toy-form">
      <div className="toy-form-header">
        <h1>Add a new Toy</h1>
        <p>Please input the following fields to add a new listing</p>
      </div>
      <form onSubmit={submitToyHandler}>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}/>
        <div className="input-fields">
          <div className="listing-option">
            <input type="radio" name="option" onClick={handleIsFree} /> list for
            free
            <input type="radio" name="option" onClick={handleIsFree} /> list for
            trade
          </div>
          <label htmlFor="toyName" className="name-label">
            Name:
          </label>
          <input
            className
            type="text"
            name="name"
            onChange={handleAddToy}
            value={toyData.name}
            required
          ></input>
          <label htmlFor="toyDescription">Description:</label>
          <input
            type="text"
            name="description"
            onChange={handleAddToy}
            value={toyData.description}
            required
          ></input>
          <label htmlFor="toyImage">Image:</label>
          <input
            type="text"
            name="image"
            onChange={handleAddToy}
            value={toyData.image}
            required
          ></input>
          <label>
            Category:
            <select
              className="render-categoryOptions"
              name="category"
              onChange={handleAddToy}
              value={toyData.category._id}
              required
            >
              {categoryData.map((category) => (
                <Category
                  key={category._id}
                  category={category.name}
                  id={category._id}
                />
              ))}
            </select>
          </label>
          <label>
            Condition:
            <select
              className="render-categoryOptions"
              name="condition"
              onChange={handleAddToy}
              value={toyData.condition._id}
              required
            >
              {conditionData.map((condition) => (
                <Condition
                  key={condition._id}
                  condition={condition.name}
                  id={condition._id}
                />
              ))}
            </select>
          </label>
          <div className="submit-btn-container">
            <input type="submit" className="submit-btn" value="Submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
