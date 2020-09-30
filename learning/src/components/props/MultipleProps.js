import React from "react";

const MultipleProps = props => {
  return (
    <>
      <h3>Passing Multiple Props</h3>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.occupation}</p>
    </>
  );
};

export default MultipleProps;
