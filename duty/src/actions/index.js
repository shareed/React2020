export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const ADD_TODO = "ADD_TODO";


export const toggleEditing = () => {
  console.log("toggle editing action creator");
  return { type: TOGGLE_EDITING };
};

export const addToDo = newTodo => {
  console.log("add todo action creator");
  return { type: ADD_TODO, payload: newTodo };
};
