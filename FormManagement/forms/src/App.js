import React, { useState } from 'react';

import Quotes from "./components/Quotes";
import QuoteForm from "./components/QuoteForm";

import './App.css';


// add a new note
// - create a function
// - hold the data somewhere
// - push the data onto the state

// create a form to make a new note
// - inputs for the data
// - button to submit
// - onSubmit function to hook up to the state

// update/delete quotes

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      name: "Programming Quote",
      body:"That's the thing about people who think they hate computers. What they really hate is lousy programmers. ― Larry Niven" 
   }
  ]);

  const addNewQuote = (formdata) => {
    const newQuote = {
      id:Date.now(),
      name:formdata.name,
      body: formdata.body
    }
    setQuotes([...quotes, newQuote])
  }

  return (
    <div className="App">
      <div className= 'quote-form-component'>
         
        <QuoteForm quotes={quotes} addNewQuote = { addNewQuote}/>
      </div>
      
      <div className = 'quote-component'>
            <h1>Quotes</h1>
            <Quotes quotes={quotes} addNewQuote = { addNewQuote} />
      </div>
    </div>
  );
}

export default App;
