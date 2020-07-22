import React, { useState } from "react";
import Title from "./Title";
import ProfileImage from "./ProfileImage";
import Copy from "./Copy";
import PridePoints from "./PridePoints";

const ProfileCard = ({ propsPassedFromParent }) => {
  const [points, setPoints] = useState(propsPassedFromParent.pride);

  const incrementPoints = () => {
    setPoints(points => points + 1);
  };
  return (
    <div className=" props box">
      <ProfileImage image={propsPassedFromParent.profileImg} />
      <Title name={propsPassedFromParent.name} />
      <PridePoints incrementPoints={incrementPoints} points={points} />
      <Copy copy={propsPassedFromParent.copy} />
    </div>
  );
};
export default ProfileCard;