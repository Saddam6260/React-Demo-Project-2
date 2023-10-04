import "./UserData.css";

const UserData = (props) => {
  return (
    <li className="user">
      <span className="user-name">{props.name}</span>
      <span className="user-age">{props.age}</span>
    </li>
  );
};

export default UserData;
