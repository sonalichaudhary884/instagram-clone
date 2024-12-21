import "./leftSide.css";
import React from "react";
import instagramLogo from "../assets/instagramLogo.png";
import profileImg from "../assets/sona.jpg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GestureIcon from "@mui/icons-material/Gesture";
import MenuIcon from "@mui/icons-material/Menu";

const LeftSide = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img className="logoImg" src={instagramLogo} alt="Instagram" />
      </div>
      <div className="navLinkPart">
        <div className="navLink">
          <HomeIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Home</div>
        </div>
        <div className="navLink">
          <SearchIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <ExploreIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Explore</div>
        </div>
        <div className="navLink">
          <OndemandVideoIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Reels</div>
        </div>
        <div className="navLink">
          <MailOutlineIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Messages</div>
        </div>
        <div className="navLink">
          <FavoriteBorderIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink">
          <AddBoxIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
          <div className="navName">Create</div>
        </div>
        <div className="navLink">
          <img className="profileImg" src={profileImg} alt="profile Image" />
          <div className="navName">Profile</div>
        </div>
        <div className="belowPart">
          <div className="navLink">
            <GestureIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
            <div className="navName">Threads</div>
          </div>
          <div className="navLink">
            <MenuIcon sx={{ fontSize: "30px", margin: "0 20px 0 0" }} />
            <div className="navName">More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
