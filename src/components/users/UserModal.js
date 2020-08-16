import React, { useContext } from "react";
import ModalWrapper from "../common/Modal";
import { Table } from "antd";
// Custom Imports
import UserCalendar from "../calendar/UserCalendar";
import { ActivitiesContext } from "../../context/ActivitiesContext";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
  },
];
const UserModal = ({ name }) => {
  const { todayActivityLogs } = useContext(ActivitiesContext);
  return (
    <ModalWrapper name={name}>
      <Table
        columns={columns}
        dataSource={todayActivityLogs
          .map((log, index) => {
            return {
              key: +index + 1,
              date: log.Date,
              startTime: log.startTime,
              endTime: log.endTime,
            };
          })
          .sort((a, b) => b.key - a.key)}
      />

      <UserCalendar />
    </ModalWrapper>
  );
};

export default UserModal;
