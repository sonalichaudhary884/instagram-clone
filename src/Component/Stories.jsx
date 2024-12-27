import React from "react";
import "./Stories.css";
import Post from "./Post";

const StoryCard = ({ name, imageUrl }) => {
  return (
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={imageUrl} alt="image" />
      </div>
      <div className="profileName">{name}</div>
    </div>
  );
};

const Stories = () => {
  const stories = [
    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "KatrinaKaif",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQf9TCkKAoNXq9ZKOtUbAlZu-W4Rl_FbMXg&s",
    },

    {
      name: "Ravichaudhary",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQHQJ1S4B-Pe7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729618044110?e=2147483647&v=beta&t=St-W0OCqqG6T3aAl29X7jNWp81ltVOcnLeuSQCzyJNA",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },

    {
      name: "AkshayKumar",
      imageUrl:
        "https://i.pinimg.com/736x/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg",
    },
  ];

  return (
    <div className="middleHomeSide">
      <div className="storyBlock">
        {stories?.map((item) => (
          <StoryCard name={item.name} imageUrl={item.imageUrl} />
        ))}
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Stories;
