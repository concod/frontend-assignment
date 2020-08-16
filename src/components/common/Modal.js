import React, { useContext, useState } from "react";
import { Modal, Button } from "antd";

// Custom Imports
import { ModalContext } from "../../context/ModalContext";

const ModalWrapper = ({ name, children }) => {
  const [showModal, setShowModal] = useContext(ModalContext);
  const [showCalendar, setShowCalendar] = useState(false);
  console.log(showCalendar);
  // console.log(showModal);
  return (
    <Modal
      title={name || "default"}
      visible={showModal}
      onOk={() => {
        setShowCalendar(false);
        setShowModal(!showModal);
      }}
      onCancel={() => {
        setShowCalendar(false);
        setShowModal(!showModal);
      }}
      width={1400}
    >
      {showCalendar ? children[1] : children[0]}
      {!showCalendar ? (
        <Button
          onClick={() => setShowCalendar(true)}
          className="show"
          style={{ position: "absolute", bottom: "10px" }}
        >
          Show Complete Logs
        </Button>
      ) : null}
    </Modal>
  );
};

export default ModalWrapper;
