import React from "react";

import Parents from "./Parents";
import Siblings from "./Siblings";
import { FamilyContext } from "../../contexts";

// Consume data from the context object rather than from props
// render props pattern
// * import the Consumer component
// * wrap consumer around the JSX that needs the data

export default function FamilyTree(props) {
  return (
    <section className="FamilyTree">
      <FamilyContext.Consumer>
        {family => {//family is value from the Provider, we can call it whatever
          console.log({ family })
          return (
            <>
              <h1>{family.familyName}</h1>
              <h2>Parents</h2>
              <Parents />
              <div className="spacer" />
              <h2>Siblings</h2>
              <Siblings />
            </>
          );
        }}
      </FamilyContext.Consumer>
    </section>
  );
}
