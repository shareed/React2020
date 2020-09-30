import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "Wash the car", reedStatus: true },
    { task: "Clean the gutters", reedStatus: false }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, reedStatus: false }
        ]
      };
    default:
      return state;
  }
};
