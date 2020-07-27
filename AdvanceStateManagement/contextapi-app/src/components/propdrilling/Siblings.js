import React from "react";

const Siblings = props => {
  // render props pattern 🤮
  return (
    <section className="siblings">
      {props.siblings.map(s => (
        <div className="person" key={s.name}>
          <img width="150" src={s.img} alt={s.name} />
          <strong>{s.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;
