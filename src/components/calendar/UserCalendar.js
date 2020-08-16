import React, { useContext } from "react";
import { Calendar, Badge } from "antd";

// Components import
import { ActivitiesContext } from "../../context/ActivitiesContext";
import { getListData } from "./listData";

const UserCalendar = () => {
  const { totalActivityLogs } = useContext(ActivitiesContext);
  function dateCellRender(value) {
    const listData = getListData(value, totalActivityLogs);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};

export default UserCalendar;
