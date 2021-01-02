import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({
  showModal,
  title,
  body,
  confirmHandler,
  cancelHandler,
}) => {
  return (
    <Modal show={showModal} onHide={cancelHandler}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={confirmHandler}>YES</Button>
        <Button variant="info" onClick={cancelHandler}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
