import React from "react";

const MainTitle = props => {
  console.log(props);
  return (
    <h1>
      This is how we pass <span>{props.title}</span>
    </h1>
  );
};

export default MainTitle;
