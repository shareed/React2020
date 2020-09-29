import React, { useState } from "react";

const QuotesForm = props => {
  console.log("Props From Quote Form",props);

  const [quote, setQuote] = useState({
    name: "",
    body: ""
  });


  const changeHandler = (e) => {
    setQuote({
      ...quote, [e.target.name]: e.target.value
      //...quotes allow us to keep the value as we type, without it we could only type one lett
      //[e.target.name]: e.target.value --> overwrites key/value pair for useStae
      //with computed properties.
    })
    console.log("Quote State From Quote Form", quote);
  }
  

  const submitForm = e => {
    e.preventDefault(); // prevent default <form> submit behavior
    props.addNewQuote(quote); // pull addNewNotes from props, pass NoteForm state and add to App state with array spread
    setQuote({ name: "", body: "" }); // reset form after adding to app state.
  };


  return(
    <form onSubmit = { submitForm}>
            <h1>Create A New Quote</h1>
      <label htmlFor = 'name'>Give Your Quote A Name</label>
      <input type = 'text' 
             name = 'name'
             value = {quote.name}
             onChange = { changeHandler }
      />

      <label htmlFor = 'body'>Enter Your Quote</label>
      <input type="textarea" 
             name="body"
             value={quote.body}
             onChange = { changeHandler }
      />

      <button type="submit">Add Quote</button>
    </form>
  );
};

export default QuotesForm;
