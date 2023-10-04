import { useState } from "react";

import "./App.css";
import UserInput from "./components/PersonData/UserInput/UserInput";
import UserList from "./components/PersonData/UserList/UserList";

function App() {
  const userList = [];

  const [usersInfo, setUsersInfo] = useState(userList);

  const addUserHandler = (person) => {
    console.log(person);
    setUsersInfo(prevUsers => {
      const UpdateUser = [...prevUsers];
      UpdateUser.unshift(person);
      return UpdateUser;
    })
  };

  return (
    <div className="container">
      <UserInput addUser={addUserHandler} />
      <UserList usersList={usersInfo} />
    </div>
  );
}

export default App;
