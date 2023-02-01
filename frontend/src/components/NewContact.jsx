import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ContactForm } from './ContactForm';


const NewContact = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ContactForm
            // addContact={addContact}
            // updateContact={updateContact}
            // dataToEdit={dataToEdit}
            // setDataToEdit={setDataToEdit}
      />
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default NewContact;
