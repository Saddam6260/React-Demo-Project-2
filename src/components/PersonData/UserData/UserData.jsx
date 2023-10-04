import "./UserData.css";

const UserData = (props) => {

  const onDeleteUserdata = () => {
    props.onDelete(props.id);
  }
  return (
    <li className="user" onClick={onDeleteUserdata}>
      <span className="user-name">{props.name}</span>
      <span className="user-age">{props.age}</span>
    </li>
  );
};

export default UserData;
