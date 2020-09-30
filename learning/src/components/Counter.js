import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  //   var countStateVariable = useState(0); // Returns a pair
  // var count = countStateVariable[0]; // First item in a pair
  // var setCount = countStateVariable[1]; // Second item in a pair
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked <span>{count}</span> times
      </p>
      <div className="button_container">
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count * 5)}>Multiply by 5</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;