import React from "react";

const SubTitle = props => {
  console.log(props);
  return (
    <h2>
      You can also pass a function as props
      <span>{props.multiply(5, 3)}</span>
      You can also pass a function as props{" "}
      <span>{props.multiply(props.x, props.y)}</span>
    </h2>
  );
};
export default SubTitle;
