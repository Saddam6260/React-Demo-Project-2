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

  let content = (
    <p className="no-user">No Such File Here</p>
  )

  if(usersInfo.length > 0) {
    content = (
      <UserList usersList={usersInfo} />
    )
  }

  return (
    <div className="container">
      <UserInput addUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
