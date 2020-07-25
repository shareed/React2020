This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# [Redux](./src/img/big3.jpg)
* **gives us a way to able to have our state outside any indiviual component**
* **gives us a way for the child component to be able to update the state of the parent component**

* Managing application state and keeping it in sync across all layers of our application is very important
* Redux is a predictable state management library for JavaScript applications and is the most popular State container for React applications. 
* Redux has nothing to do with React other than the fact that many developers use them together. 
##### Core Concepts/principles of Redux
* [Store ---> View/UI ---> Action Creator ---> Reducers](./src/img/reduxpieces.jpg)

* Everything that changes within your application is represented by a single JavaScript Object known as the store, which contains our state for our application.
* Application state is Immutable
* When the application state changes, we clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object, and we never write to our store object.

* Pure functions change our state,(the reducer)
* Given the same input, a pure function returns the same output every time. 
* All functions (reducers) in Redux must be pure functions. Meaning they take in some state and a description of what changes took place and return a copy of our state.
* Redux is pretty simple at its core, the complications with Redux arise when we try and implement it within a React application. Usually, these issues are because there is some new syntax, and it’s just a matter of time spent learning to sort them out.





# Get Started with Redux
* `npm i redux`
* `npm i react-redux`


#### [CreateStore](./src/img/createstore.jpg)
* in index.js
* Import { createStore } from redux : `import { createStore } from redux`
* create a const variable for the store and set it equal to the create store function: `const store = createStore()`
* the createStore function takes a reducer `const store = createStore(reducer)`
* the reducer is a function that returns an object that represents the sate tree


#### [Wrap App component in Provider](./src/img/provider.jpg)
* Import { Provider } from react-redux : `import { Provider } from react-redux`
* Wrap app component inside provider component 
* Pass the store object to the provider's store prop

#### [Connecting Components](./src/img/mapstp1.jpg)

**Use `connect()`**
* the connect function is used to connect components to the store
* Import connect from react-redux `import { connect } from 'react-redux';`
* Export the connect function and invoke it twice
    * In the first pass in a function and an object
    * In the second pass pass in the component
    * `export default connect(null, {})(ComponentName);`

**[Use `mapStateToProps`](./src/img/mapstp.jpg)**
* tells connect which pieces of state to pass to the component
* takes state as an argument
* returns an object
* properties in the object is what get passed to the compoenet as props
* values in the object are properties from the state object
    

[Redux Data Flow](./src/img/dataflow.jpg)
#### Redux actions
* actions are packets of information that describe events taht occurred in the UI
 * an object
 * actions are dispatched to the reducer and tell the reducer how to update the state tree
* **[Action Type](./src/img/actiontype.jpg):** created to aviod hidden bugs and used as the type in the action
* **[Action Creator function](./src/img/actioncreator.jpg):** creates an action by returning an action object, when invoked the action is returned and dispatched(under the hood) to the reducer



    **How to create actions**

    * import actions from actions
    * pass it into the connect function to add it to props
        * `export default connect(mapStateToProps, { addMovie }) (MovieList);`
    * invoke the function and pass in the state

                addMovie = e => {
                    e.preventDefault();
                    this.props.addMovie(this.state.newMovie)
                }

    * check the console to make sure the input was passed into the action creator

        [Actions and Action Creator Video](https://www.youtube.com/watch?time_continue=589&v=nF2HkjPz01A&feature=emb_logo)


#### [Redux Reducers](./src/img/reducer.jpg)
* reducers are pure functions, that take in the current state tree and an action object as arguments
* a switch case is used to check the action type of the dispatched action, and creates an updated state tree based on action type and payload
* each case in the switch statement returns the new, updated state tree, triggering the UI to re-render with the new data

    ##### How to create Reducers
    * import action type file action file
    * move the state tree into the reducer file into a const variable called initialState
    * create the reducer function pass in the state with the default value of initialState and the dispatched action
    * add switch statement and check for the action type
    * make a case for each action
    * update and return the state tree (use immutable principles)
    * return state for the default
* [Redux Reducer Video](https://www.youtube.com/watch?time_continue=589&v=nF2HkjPz01A&feature=emb_logo)