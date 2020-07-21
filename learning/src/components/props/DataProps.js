import React from "react";

const DataProps = props => {
  console.log("this is our props", props);
  return (
    <div className="character-list">
      <ul>
        {props.data.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataProps;
