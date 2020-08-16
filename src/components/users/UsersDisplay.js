import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Components Imports
import UserModal from "./UserModal";
import { ModalContext } from "../../context/ModalContext";
import { ActivitiesContext } from "../../context/ActivitiesContext";
// Utils
import { timeFunctions } from "../../utility/timeFunctions";

const UsersDisplay = ({ name, tz, activityPeriods }) => {
  const [showModal, setshowModal] = useState(false);

  const { todayActivityLogs, totalActivityLogs } = timeFunctions(
    activityPeriods,
    tz
  );

  return (
    <>
      <ModalContext.Provider value={[showModal, setshowModal]}>
        <div className="usersList" onClick={() => setshowModal(!showModal)}>
          <Avatar icon={<UserOutlined />} />
          <span style={{ marginLeft: "10px" }}>{name}</span>
        </div>
        <ActivitiesContext.Provider
          value={{ todayActivityLogs, totalActivityLogs }}
        >
          <UserModal name={name} />
        </ActivitiesContext.Provider>
      </ModalContext.Provider>
    </>
  );
};

export default UsersDisplay;
