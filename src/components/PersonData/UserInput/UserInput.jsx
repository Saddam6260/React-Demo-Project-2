import "./UserInput.css";
import Button from "../../UI/Button";

const UserInput = () => {
  return (
    <div className="form-wrap">
      <form className="form">
        <div className="input-wrap">
          <label htmlFor="">Enter Your Name :</label>
          <input type="text" />
        </div>
        <div className="input-wrap">
          <label htmlFor="">Enter Your Age (20 to 40) : </label>
          <input type="number" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserInput;
