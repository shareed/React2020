// titleReducer is a place to organize all the actions we want to do for titles in the application. All of those actions get dispatched to this reducer, and the state gets updated here. The actions being performed are TOGGLE_EDITING and UPDATE_TITLE

// Let’s define each building block of this pattern before we write our first reducer.

// Pure function definition:
// 1. no side effects
// 2. always returns the same result when given the same inputs

// Reducer definition:
// 1. Pure function
// 2. takes 2 objects and returns 1 (hence the name)
// 3. For useReducer and Redux, the first object is previous state, and the second is an action object
// 4. The reducer returns a new state object based on the action applied to the state object passed in

// Action definition:
// 1. An object with a required 'type' key
// 2. optional 'payload' key

// Actions are "dispatched" by dispatch functions

// Export two things: initialState, titleReducer
export const initialState = {
    title: "Title from the Reducer",
    editing: false
  };
  
  export const titleReducer = (state, action) => {
      
  //action has a type property that we pass to the dispatch function
    switch (action.type) {
      case "TOGGLE_EDITING":
          //spread in state and set the editing to the oppisite of state.editing
        return { ...state, editing: !state.editing };
      case "UPDATE_TITLE":
          //spread in state and set the editing to false and set the title to the payload(input)
        return { ...state, title: action.payload, editing: false };
      default:
        return state;
    }
  };
  