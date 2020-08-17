import React, { useContext, useState } from "react";
import { Modal, Button } from "antd";

// Custom Imports
import { ModalContext } from "../../context/ModalContext";

const ModalWrapper = ({ name, children }) => {
  const [Table, Calendar] = children;
  const [showModal, setShowModal] = useContext(ModalContext);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Modal
      className="modalwrapper"
      title={name}
      visible={showModal}
      onOk={() => {
        setShowCalendar(false);
        setShowModal(!showModal);
      }}
      onCancel={() => {
        setShowCalendar(false);
        setShowModal(!showModal);
      }}
      width={showCalendar ? "95%" : "50%"}
    >
      {showCalendar ? Calendar : Table}
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
