import React from "react";

const Quotes = props => {
  return (
    <div className="quote-list">
      {props.quotes.map(quote => (
        <div className="quote" key={quote.id}>
          <h2>{quote.name}</h2>
          <p>{quote.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;

