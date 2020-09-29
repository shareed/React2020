import React, { useState } from "react";

// props = { addNewNote: fn addNewNote} // use obj destructing in props to pull addNewNote from props as a parameter
const NoteForm = ({ addNewNote }) => {
  // Step 3: Set up state for FORM stored in note object. Note this is separate from index.js 'notes'
  const [note, setNote] = useState({ title: "", body: "" });
  // Step 4: Set up onChange event when input text changes (similar to our onClick event used with buttons)
  // This uses https://reactjs.org/docs/events.html#form-events
  const handleChanges = event => {
    // Step 5: Use text input value to update state
    // Step 12: Refactor inputs and handleChanges to use "name" in updating state
    
    // event --> Synthetic Event from React
    // event.target --> DOM element that fired event
    // event.target.name --> name attribute value on element that fired event
    // event.target.value --> value of element that fired event.


    // computed properties... instead of using a string as the key, calculate
    // the key inside of [event.target.name] and then set that key to the value. 

    // object spread...incorporate the entire object, and then overwrite key/value pair with computed properties.
    setNote({ ...note, [event.target.name]: event.target.value }); // recommended
  };

  console.log("note state", note);

  // Step 8: Create submit form function with addNewNote prop
  // Step 13: Clear form onSubmit
  const submitForm = event => {
    event.preventDefault(); // prevent default <form> submit behavior
    addNewNote(note); // pull addNewNotes from props, pass NoteForm state and add to App state with array spread
    setNote({ title: "", body: "" }); // reset form after adding to app state.
  };
  return (
    <form onSubmit={submitForm}>
      {/* Step 2: Add <label> with htmlFor & update <input> id to create relationship b/t input and label*/}
      <label htmlFor="title">Title</label>
      {/* Step 1: Create a basic <form> with <input> type=text inside to set up HTML form */}
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        value={note.title} 
        name="title"
        onChange={handleChanges}
      />
      {/* Step 10: Setting Value with State in <input>*/}

      {/* Step 11: Add note <textarea> and update note state and  */}
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        placeholder="Add your note"
        value={note.body}
        name="body"
        onChange={handleChanges}
      />
      {/* Step 9: Submit form with button and onSubmit. 
      Set the button type to submit so that when it's clicked, it triggers the onSubmit event in <form> */}
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
