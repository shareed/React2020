import React, { useState } from "react";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import DataProps from "./DataProps";
import { characters } from "./data";
import "./props.css";

function Props() {
  const [character] = useState(characters);
  const multiplyNumbers = (x, y) => x * y;

  return (
    <div>
      <MainTitle title="hello" />
      <MainTitle title="something else" />
      <SubTitle multiply={multiplyNumbers} x={5} y={10} />
      <SubTitle multiply={multiplyNumbers} x={2} y={3} />
      <DataProps data={character} />
    </div>
  );
}

export default Props;