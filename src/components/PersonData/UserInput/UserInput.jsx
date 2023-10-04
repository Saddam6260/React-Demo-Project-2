import { useState } from "react";

import "./UserInput.css";
import Button from "../../UI/Button";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const onCloseHandler = () => {
    setIsValid(true);
  };

  let alert = (
    <p>Please Enter Your Valid name or age</p>
  )

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const personData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.addUser(personData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div className={`form-wrap ${!isValid ? "invalid" : ""}`}>
      <div className="alert-wrap">
        <div className="alert">
          {alert}
          <button onClick={onCloseHandler}>
            <span>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </button>
        </div>
      </div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-wrap">
          <label htmlFor="username">Enter Your Name :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="age">Enter Your Age (20 to 40) : </label>
          <input
            type="number"
            id="name"
            name="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserInput;
