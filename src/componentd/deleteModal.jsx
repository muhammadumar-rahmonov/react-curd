import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LoadingSpinner from "./sppiner";

function DeleteModal({ userId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  async function DeleteData() {
    setLoading(true);
    try {
      const data = await axios.delete(
        `https://task-dev-kom.vercel.app/api/delete-user/${userId}`
      );

      if (data.status === 200) {
        location.reload();
        setShow(false);
      }
    } catch (error) {}
    setLoading(false);
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button
            variant="outline-success "
            className="xBTn"
            onClick={handleClose}
          >
            no
          </Button>
          <Button
            variant="outline-danger"
            disabled={loading}
            onClick={DeleteData}
          >
            {loading ? <LoadingSpinner /> : "yes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
