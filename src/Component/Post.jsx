import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Post = () => {
  return (
    <div className="postSection">
      <div className="post">
        <div className="postInfo">
          <img
            className="postinfoImg"
            src="https://www.mrdustbin.com/wp-content/uploads/2020/08/Hrithik-Roshan.jpg"
            alt=""
          />
          <div className="postInfousername">Hrithick Roshan</div>
          <div className="timingInfo">. 36 min</div>
        </div>
        <div className="postImg">
          <img
            className="postImage"
            src="https://www.mrdustbin.com/wp-content/uploads/2020/08/Hrithik-Roshan.jpg"
          />
        </div>
        <div className="iconsBlock">
          <div className="leftIcon">
            <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
            <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} />
            <SendOutlinedIcon sx={{ fontSize: "30px" }} />
          </div>
          <div>
            <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
          </div>
        </div>
        <div className="likeSection">
          <div className="imagesLike">
            <img
              className="likeImg"
              src="https://www.mrdustbin.com/wp-content/uploads/2020/08/Hrithik-Roshan.jpg"
            />
            <img
              className="likeImg2"
              src="https://www.mrdustbin.com/wp-content/uploads/2020/08/Hrithik-Roshan.jpg"
            />
          </div>
          <div className="noOfLikes">112,456 likes</div>
        </div>
        <div className="postAbout">
          <div className="postAboutName">Hrithik Roshan</div>
          <div className="infoComment">Happy to see you Hrithikkkkk</div>
        </div>
        <div className="noOfComment">View All 467 Comments</div>
        <div className="addComment">Add a Comment...</div>
      </div>
    </div>
  );
};

export default Post;
