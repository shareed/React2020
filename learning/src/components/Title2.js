import React, { useState, useReducer } from "react";
import { initialState, titleReducer } from "../reducers";

const Title2 = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);

  const [newTitleText, setNewTitleText] = useState("");
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
                //we need to sed a payload back for the data we want to send back
              dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title2;
