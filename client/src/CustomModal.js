import React from "react";
import Modal from "@material-ui/core/Modal";

export default function CustomModal({ data, open, handleCloseParent }) {
  const handleClose = () => {
    handleCloseParent();
  };
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={{ color: "white" }}>
        <h2>{data.title}</h2>
        <div>
          <div>{data.company}</div>
          <div>{data.url}</div>
          <div>{data.created_at}</div>
          <div>{data.location}</div>
        </div>
        <hr />
      </div>
    </Modal>
  );
}
