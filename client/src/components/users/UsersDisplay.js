import React, { useState } from "react";
import { Avatar } from "antd";

// Components Imports
import UserModal from "./UserModal";
import { ModalContext } from "../../context/ModalContext";
import { ActivitiesContext } from "../../context/ActivitiesContext";
// Utils Import
import { timeFunctions } from "../../utility/timeFunctions";

const UsersDisplay = ({ name, tz, activityPeriods }) => {
  const [showModal, setshowModal] = useState(false);

  const { todayActivityLogs, totalActivityLogs } = timeFunctions(
    activityPeriods,
    tz
  );

  return (
    <ModalContext.Provider value={[showModal, setshowModal]}>
      <div className="usersList" onClick={() => setshowModal(!showModal)}>
        <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
          {name.charAt(0)}
        </Avatar>
        <span style={{ marginLeft: "10px" }}>{name}</span>
      </div>
      <ActivitiesContext.Provider
        value={{ todayActivityLogs, totalActivityLogs }}
      >
        <UserModal name={name} />
      </ActivitiesContext.Provider>
    </ModalContext.Provider>
  );
};

export default UsersDisplay;
