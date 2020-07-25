import { ADD_MOVIE } from '../actions';

const initialState = {
    user: {
        name: "shannon",
        favcolor: "purple"
      },
      movies: [
        "Where The heart Is",
        "Harry Potter",
        "Black Panther",
        "Girls Trip"
      ],
      todoList: [
        { task: 'Learn to Code', id: 0, completed: false },
        { task: 'Learn to Drive', id: 1, completed: false },
        { task: 'Learn to Walk', id: 2, completed: false }
      ],
      moneyToMake: 500000000000
     
    };

//redux will call the reducer when the app loads so we must give it a default state because state will be undefined
    export const newReducer = ( state = initialState, action ) => {
        switch (action.type) {//look at the action type
            case ADD_MOVIE://if action is add movie
                return {
                    //this is where we will use immuable principles to replace the state tree with a new object
                    ...state,// only changing the movies so we spread in the state and just update the movies property
                    movies: [...state.movies, action.payload] //make a new array copy in old array and add new movie 
                    //string on the end of the array, the string is kept on action.payload
                }
                default:
                    return state
        }
    }