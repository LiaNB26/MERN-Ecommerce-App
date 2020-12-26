import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Timer from "react-compound-timer";

export const IdleTimeOutModal = ({ showModal, handleClose, handleLogout }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You Have Been Idle!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You will be logged out. Do You want to stay?</Modal.Body>
      <Modal.Body>
        <h2 style={{ textAlign: "center" }}>
          <Timer
            formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
            initialTime={1000 * 60 * 2}
            direction="backward"
            checkpoints={[
              {
                time: 0,
                callback: handleLogout,
              },
            ]}
          >
            {() => (
              <React.Fragment>
                <Timer.Minutes /> : <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
        </h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Stay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
