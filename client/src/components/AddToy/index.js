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
    // const token = Auth.getToken()
  };

  return (
    <div className="add-toy-form">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleAddToy}
            value={toyData.name}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleAddToy}
            value={toyData.description}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            onChange={handleAddToy}
            value={toyData.image}
          />
        </label>
        <label>
          Category:
          <select
            className="render-categoryOptions"
            name="category"
            onChange={handleAddToy}
            value={toyData.category._id}
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
        <button onClick={submitToyHandler}>submitToyHandler</button>
      </form>
    </div>
  );
};

export default AddToy;
