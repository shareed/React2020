import React, { useState } from "react";
import dummydata from "./dummydata";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  const [data] = useState(dummydata);
  console.log(data);
  return (
    <div className="props posts-container-wrapper">
      {data.map(p => (
        <ProfileCard propsPassedFromParent={p} />
      ))}
    </div>
  );
};
export default ProfilePage;
