import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { initialState, titleReducer } from "../reducers/titleReducer";
import { updateTitle, toggleEditing } from "../actions";

const Title = props => {
  const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log(state);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i className="far fa-edit" onClick={() => props.toggleEditing()} />
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
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Defines what values our component reads from application store
const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    editing: state.titleReducer.editing
  };
};

// Defines what actions our component calls to update store
const mapDispatchToProps = { toggleEditing, updateTitle };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);

// Step 2: connect the component to the Redux store
// export default connect(mapStateToProps, mapDispatchToProps)(Title)

// connect is a function that takes two arguments:
// 1- mapStateToProps, a function that returns an object. This maps our redux state to the props of the component we are connecting

// 2. mapDispatchToProps, an object of action creators - this wraps each action creator inside dispatch, and then adds a corresponding function to the props of the component we are connecting. (Calling that function dispatches the action to the reducer.)

// connect(mapStateToProps, mapDispatchToProps) returns a HOC, which we then invoke on our component to enhance it with the ability to communicate with the store. That's why it looks like we're "calling connect twice" but we're actually just chaining the successive function calls together.
