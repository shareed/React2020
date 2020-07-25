import { ADD_MEMBER } from "../actions";

const initialState = {
  members: [
    { name: "Shannon Reed", reedStatus: true },
    { name: "Tatum Reed", reedStatus: false }
  ]
};

export const reedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, reedStatus: false }
        ]
      };
    default:
      return state;
  }
};
