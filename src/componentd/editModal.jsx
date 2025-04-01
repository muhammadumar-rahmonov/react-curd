import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import LoadingSpinner from "./sppiner";

function EditModal({ userId, users }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);

    let user = users.find((val) => val._id === userId);

    setFirstName(user.firstName);
    setLastname(user.lastName);
    setEmail(user.email);
  };

  async function editData() {
    setLoading(true);
    try {
      const data = { firstName, lastName, email };

      const response = await axios.put(
        `https://task-dev-kom.vercel.app/api/update-user/${userId}`,
        data
      );

      if (response.status === 200) {
        location.reload();
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <Button
        className="edit-btn"
        variant="outline-success"
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="firstName"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Last name"
            className="mb-3"
          >
            <Form.Control
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="lastName"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editData} disabled={loading}>
            {loading ? <LoadingSpinner /> : "save changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
