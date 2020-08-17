import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Avatar size={"large"} icon={<UserOutlined />} />
      <h1
        style={{
          display: "inline-block",
          margin: "10px 0 10px 10px",
          color: "grey",
        }}
      >
        Users
      </h1>
    </nav>
  );
};

export default Navbar;
