import React from "react";

import Parents from "./Parents";
import Siblings from "./Siblings";

export default function FamilyTree(props) {
  return (
    <section className="FamilyTree">
      <h1>{props.family.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={props.family} />

      <div className="spacer" />
      <h2>Siblings</h2>

      <Siblings siblings={props.family.siblings} />
    </section>
  );
}
