import "./UserList.css";
import UserData from "../UserData/UserData";

const UserList = (props) => {
  return (
    <div className="userList-wrap">
      <ul className="userList">
        {props.usersList.map((user, index) => (
          <UserData
            key={index}
            name={user.name}
            age={user.age}
            id={user.id}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
