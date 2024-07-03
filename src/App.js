import logo from "./logo.svg";
import "./App.css";
import Seder from "./component/seder";
function App() {
  return (
    <div>
      <Seder contents={"Hrllo"} />
      <Seder dark={true} />

      <h2>Hello</h2>
      <Seder />
    </div>
  );
}

export default App;
