import React from "react";
import { useQuery } from "react-query";

// Component Imports
import UsersDisplay from "./UsersDisplay";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3001/users/all");
  return res.json();
};

const UsersContainer = () => {
  const { data, status } = useQuery("users", fetchUsers);

  return (
    <div className="userContainer">
      {status === "error" && <div>failed to load</div>}
      {status === "loading" && <div> Loading data...</div>}
      {status === "success" && (
        <>
          {data.ok &&
            data.members.map((member) => (
              <UsersDisplay
                key={member.id}
                name={member.real_name}
                tz={member.tz}
                activityPeriods={member.activity_periods}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default UsersContainer;
