import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TOY } from "../../utils/mutations";
import Auth from "../../utils/auth";

import "./AddToy.scss";

import { QUERY_CATEGORY } from "../../utils/queries";
import { Button, Modal } from "react-bootstrap";

import CategoryOptions from "../CategoryId";

const AddToy = (data) => {
  const [showModal, setShowModal] = useState(false);
  const [toyData, setToyData] = useState({
    name: "",
    description: "",
    image: "",
    category: { _id: "" },
  });

  const [categoryName, setCategoryName] = useState({ category: "" });

  const modalClose = () => setShowModal(false);
  const modalShow = () => setShowModal(true);

  const handleAddToy = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setToyData({ ...toyData, [name]: value });
    console.log(toyData);
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

    setToyData({ name: "", description: "", image: "",category: { _id: "" } });
  };

  return (
    <div className="toy-form">
      <div className="toy-form-header">
        <h1>Add a new Toy</h1>
        <p>Please input the following fields to add a new listing</p>
      </div>
      <form onSubmit={submitToyHandler}>
        <div className="input-fields">
        <label for="toyName" className="name-label">
          Name:
        </label>
        <input className
          type="text"
          name="name"
          onChange={handleAddToy}
          value={toyData.name}
          required
        ></input>
        <label for="toyDescription">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleAddToy}
          value={toyData.description}
          required
        ></input>
        <label for="toyImage">Image:</label>
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
              <CategoryOptions
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
    // <div className="modal-container">
    //   <Button className="openModal" onClick={modalShow}>
    //     Add a new Toy
    //   </Button>

    //   <Modal show={showModal} onHide={modalClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Add a new toy</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <div className="add-toy-form">
    //         <form>
    //           <label>
    //             Name:
    //             <input
    //               type="text"
    //               name="name"
    //               onChange={handleAddToy}
    //               value={toyData.name}
    //             />
    //           </label>
    //           <label>
    //             Description:
    //             <input
    //               type="text"
    //               name="description"
    //               onChange={handleAddToy}
    //               value={toyData.description}
    //             />
    //           </label>
    //           <label>
    //             Image:
    //             <input
    //               type="text"
    //               name="image"
    //               onChange={handleAddToy}
    //               value={toyData.image}
    //             />
    //           </label>
    // <label>
    //   Category:
    //   <select
    //     className="render-categoryOptions"
    //     name="category"
    //     onChange={handleAddToy}
    //     value={toyData.category._id}
    //   >
    //     {categoryData.map((category) => (
    //       <CategoryOptions
    //         key={category._id}
    //         category={category.name}
    //         id={category._id}
    //       />
    //     ))}
    //   </select>
    // </label>
    //         </form>
    //       </div>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={modalClose}>Close</Button>
    //       <Button onClick={submitToyHandler}>Add new Toy</Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
  );
};

export default AddToy;
