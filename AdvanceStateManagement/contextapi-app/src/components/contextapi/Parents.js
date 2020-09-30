import React, { useContext } from "react";
import { FamilyContext } from "../../contexts";

// consume data from the context object rather than props
// useContext hook, no render props :)
// * import the useContext hook and FamilyContext
// * call useContext with the context object

const Parents = props => {
  const family = useContext(FamilyContext);
  return (
    <section className="parents">
      {family.parents.map(p => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Parents;
