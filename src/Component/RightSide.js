import "./RightSide.css";
import profileImg from "../assets/sona.jpg";

const RightSide = () => {
  return (
    <div className="rightSideHome">
      <div className="topProfileRightSide">
        <div className="leftRightProfile">
          <div className="imageDivRightSide">
            <img
              className="imageRightSideProfile"
              src={profileImg}
              alt="profile"
            />
          </div>
          <div className="userNameBlock">
            <div className="userName">_sona_</div>
            <div className="fullName">SonaliChaudhary</div>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestedForYou">Suggested for you</div>
          <div className="seeAll">See All</div>
        </div>
        <div className="followBlockRightSide">
          <div className="topProfileRightBottomProfile">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src={profileImg}
                  alt="profile"
                />
              </div>
              <div className="userNameBlock">
                <div className="userName">_sona_</div>
                <div className="fullName">New to instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
        </div>
        <div className="followBlockRightSide">
          <div className="topProfileRightBottomProfile">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src={profileImg}
                  alt="profile"
                />
              </div>
              <div className="userNameBlock">
                <div className="userName">_sona_</div>
                <div className="fullName">New to instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
        </div>
        <div className="followBlockRightSide">
          <div className="topProfileRightBottomProfile">
            <div className="leftRightProfile">
              <div className="imageDivRightSide">
                <img
                  className="imageRightSideProfile"
                  src={profileImg}
                  alt="profile"
                />
              </div>
              <div className="userNameBlock">
                <div className="userName">_sona_</div>
                <div className="fullName">New to instagram</div>
              </div>
            </div>
            <div className="switchBtn">Follow</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
