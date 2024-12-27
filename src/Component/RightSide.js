import "./RightSide.css";
import profileImg from "../assets/sona.jpg";

const RightSide = () => {
  return (
    <div className="rightSideHome">
      <div className="topProfileRight">
        <div className="leftRightProfile">
          <div className="imageDivRightSide">
            <img src={profileImg} alt="" className="imageRightSideProfile" />
          </div>
          <div className="userNameBlock">
            <div className="userName">__sona__</div>
            <div className="fullName">Sonali chaudhary</div>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestedForYou">Suggested for you</div>
          <div className="seeAll">See All</div>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
