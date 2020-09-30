import React from "react";

const PridePoints = ({ incrementPoints, points }) => {
  // console.log(props)
  return (
    <div className="props point-container">
      <button  className="props-button" onClick={incrementPoints}>✚</button>
      <p className="points">{points} Pride Level</p>
    </div>
  );
};

export default PridePoints;
