export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const ADD_MEMBER = "ADD_MEMBER";

export const updateTitle = newTitle => {
  console.log("update title action creator");
  return { type: UPDATE_TITLE, payload: newTitle };
};

export const toggleEditing = () => {
  console.log("toggle editing action creator");
  return { type: TOGGLE_EDITING };
};

export const addMember = newMember => {
  console.log("add member action creator");
  return { type: ADD_MEMBER, payload: newMember };
};
