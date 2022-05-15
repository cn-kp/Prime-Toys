import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import "./profileToyCards.scss";
import { Button, Modal } from "react-bootstrap";

export default function ProfileToyCards(card) {
  const { name, description, image } = card;

  const [showModal, setShowModal] = useState(false);

  const modalClose = () => setShowModal(false);
  const modalShow = () => setShowModal(true);

  return (
    <div className="toy-user-listing">
      <div className="card-body">
        <div className="img-container">
          <img className="toy-image" src={`/images/${image}`} alt={name} />
        </div>
        <h2 className="toy-title">{name}</h2>
        <p className="toy-description">{description}</p>
        {/* <a href="#" className="btn contact-user"></a> */}
        <div className="listing-date">
          <div>
            <button type="button" className="update-btn" onClick={modalShow}>
              update
            </button>
            <button type="button" className="remove-btn">
              remove
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Name:
              <input type="text" name="name" defaultValue={name}/>
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={description}/>
            </label>
            <label>
              Image:
              <input type="text" name="image" defaultValue={image}/>
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalClose}>Close</Button>
          <Button onClick={modalClose}>Add new Toy</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
