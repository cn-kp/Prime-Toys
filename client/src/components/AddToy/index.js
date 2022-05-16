import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TOY } from '../../utils/mutations';
import { useQuery } from '@apollo/client';
import Category from '../CategoryId';

import './AddToy.scss';

import { QUERY_CATEGORY } from '../../utils/queries';

const AddToy = (data) => {
  const [categoryName, setCategoryName] = useState({ category: '' });
  const [toyData, setToyData] = useState({
    name: '',
    description: '',
    image: '',
    category: { _id: '' },
  });

  const { loading: loading1, data: data1 } = useQuery(QUERY_CATEGORY);
  let categoryData;

  if (data1) {
    categoryData = data1.categories;
    // console.log(categoryData);
  } else {
    categoryData = [];
  }

  const handleAddToy = (event) => {
    const { name, value } = event.target;
    setToyData({ ...toyData, [name]: value });
  };

  const [AddToy] = useMutation(ADD_TOY);

  const submitToyHandler = async (event) => {
    event.preventDefault();
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    try {
      const toyMutationResponse = await AddToy({
        variables: {
          input: {
            name: toyData.name,
            description: toyData.description,
            image: toyData.image,
            category: { _id: toyData.category },
          },
        },
      });
    } catch (err) {
      console.error(err);
    }

    setToyData({ name: '', description: '', image: '', category: { _id: '' } });
  };

  return (
    <div className="toy-form">
      <div className="toy-form-header">
        <h1>Add a new Toy</h1>
        <p>Please input the following fields to add a new listing</p>
      </div>
      <form onSubmit={submitToyHandler}>
        <div className="input-fields">
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
          <div className="submit-btn-container">
            <input type="submit" className="submit-btn" value="Submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
