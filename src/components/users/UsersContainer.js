import React from "react";
import { useQuery } from "react-query";

import UsersDisplay from "./UsersDisplay";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3001/users/all");
  return res.json();
};

const UsersContainer = () => {
  const { data, status } = useQuery("users", fetchUsers);

  return (
    <div>
      {status === "error" && <div>failed to load</div>}
      {status === "loading" && <div> Loading data...</div>}
      {status === "success" && (
        <div>
          {data.ok &&
            data.members.map((member) => (
              <UsersDisplay
                key={member.id}
                name={member.real_name}
                tz={member.tz}
                activityPeriods={member.activity_periods}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default UsersContainer;
