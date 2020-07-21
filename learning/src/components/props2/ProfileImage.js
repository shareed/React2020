import React from "react";

const ProfileImage = ({ image }) => {
  return (
    <img
      className="image"
      src={image}
      alt="Profiles of Jane Austen Characters"
    />
  );
};

export default ProfileImage;