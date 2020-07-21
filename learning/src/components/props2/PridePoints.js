import React from "react";

const PridePoints = ({ incrementPoints, points }) => {
  // console.log(props)
  return (
    <div className="point-container">
      <button onClick={incrementPoints}>✚</button>
      <p className="points">{points} Pride Level</p>
    </div>
  );
};

export default PridePoints;
