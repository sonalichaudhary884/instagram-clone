import "./App.css";
import LeftSide from "./Component/leftSide";
import RightSide from "./Component/RightSide.js";
import Stories from "./Component/Stories.jsx";

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">
        <Stories />
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
