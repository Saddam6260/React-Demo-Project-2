import "./App.css";
import UserInput from "./components/PersonData/UserInput/UserInput";
import UserList from "./components/PersonData/UserList/UserList";

function App() {
  return (
    <div className="container">
      <UserInput />
      <UserList />
    </div>
  );
}

export default App;
