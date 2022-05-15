import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TOY } from '../../utils/mutations';
import Auth from '../../utils/auth';

import './AddToy.scss';

import { QUERY_CATEGORY } from '../../utils/queries';
import { Button, Modal } from 'react-bootstrap';

import Category from '../CategoryId';

const AddToy = (data) => {
  const [showModal, setShowModal] = useState(false);
  const [toyData, setToyData] = useState({
    name: '',
    description: '',
    image: '',
    category: { _id: '' },
  });

  const [categoryName, setCategoryName] = useState({ category: '' });

  const modalClose = () => setShowModal(false);
  const modalShow = () => setShowModal(true);

  const handleAddToy = (event) => {
    const { name, value } = event.target;
    setToyData({ ...toyData, [name]: value });
  };
  let categoryData = data.data;
  console.log(categoryData);

  // const findCategoryId = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   setCategoryName({...categoryData, [name]: value });
  //   console.log(value);
  //   for (const i = 0; i < categoryData.length; i++) {
  //     if (categoryData[i].name === value) {
  //       const categoryID = categoryData[i]._id;
  //       console.log(categoryID);
  //       return categoryID;
  //     }
  //   }
  // };

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
      console.log(toyMutationResponse);
    } catch (err) {
      console.log(err);
    }
    // const token = Auth.getToken()
  };

  return (
    <div className="modal-container">
      <Button className="openModal" onClick={modalShow}>
        Add a new Toy
      </Button>

      <Modal show={showModal} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    <CategoryOptions
                      key={category._id}
                      category={category.name}
                      id={category._id}
                    />
                  ))}
                </select>
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalClose}>Close</Button>
          <Button onClick={submitToyHandler}>Add new Toy</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddToy;
