import logo from "./logo.svg";
import "./App.css";
import LeftSide from "./Component/leftSide";

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">Middle Side</div>
      <div className="rightSide">Right Side</div>
    </div>
  );
}

export default App;
