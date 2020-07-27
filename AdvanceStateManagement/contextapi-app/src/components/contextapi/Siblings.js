import React, { useContext } from "react";
import { FamilyContext } from "../../contexts";

// consume data from the context object rather than props
// useContext hook, no render props :)
// * import the useContext hook
// * call useContext with the context object

const Siblings = props => {
  const family = useContext(FamilyContext);
  return (
    <section className="siblings">
      {family.siblings.map(s => (
        <div className="person" key={s.name}>
          <img width="150" src={s.img} alt={s.name} />
          <strong>{s.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;
