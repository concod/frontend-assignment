import React from "react";
import Navbar from "./Navbar";
import UsersContainer from "./users/UsersContainer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <UsersContainer />
    </div>
  );
};

export default App;
