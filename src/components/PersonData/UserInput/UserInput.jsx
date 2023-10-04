import { useState } from "react";

import "./UserInput.css";
import Button from "../../UI/Button";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const personData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    }

    props.addUser(personData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div className="form-wrap">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-wrap">
          <label htmlFor="username">Enter Your Name :</label>
          <input type="text" id="username" name="username" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="input-wrap">
          <label htmlFor="age">Enter Your Age (20 to 40) : </label>
          <input type="number" id="name" name="age" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserInput;
