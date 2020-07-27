# Reducer Pattern 
**The difficulties of storing and efficiently performing logic on data within components becomes more and more apparent as the amount of data increases. Consequently, as components grow and deal with larger sets of data, the storing and transportation of state across the entire application increasingly becomes more and more cumbersome as well. Reducers offer one possible way to address this problem within the component. At the level of the application, an elegant combination of the Context API with reducers provides one possible way that React developers can manage global state.**

* immutability in programming and demonstrate its benefits
* reducer functions
* `useReducer` hook to manage state in a component


# Redux
***React is a very sophisticated UI - Component Library that can be used together with a few other libraries to build out large scale Single Page Applications. But as our Application’s scale in size so too will the data that we are concerned with within our applications. And you can only start to imagine how difficult it might be manage all of that data inside of React components. Redux is a library that can help solve this problem by providing a single source of truth for our data within our application. As your team grows, and as your application scales, Redux can help offset the pains that can be brought on as a result of complexity.***

* Redux and the problem it solves
* Redux Store and connecting it to a React application
* *connect() function to "connect" React components to the Redux store
* *Actions and Action Creators to describe state changes
* Reducers to respond to actions and update state

# Async Redux
***By nature Redux is synchronous. Because of this we need to apply some middleware to extend the functionality of our Redux package to allow for things like, promises (which are asynchronous). This module will teach you how to set up Redux-Thunk as a middleware for Redux. You will also learn how to use the Redux-Thunk package to extend your actions so that you have the ability to consume promises.***

Objectives:
* Finite State Machine pattern and it's relationship to building Redux applications
* Redux Middleware libraries into a Redux Store using `applyMiddleware`
* `redux-thunk` and asynchronous action creators to consume data from external API's

# Context API
***In your typical react application state is passed top-down (parent to child) via props, but this can become very cumbersome quickly, especially when those props are required by many components across your application. However with the introduction of reacts Context API you no longer have to pass props down from component to component - what React devs call “prop drilling”. We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props!***

* Context API and the problem is solves
* provide data to the component tree with a context provider
* consume data from a context object in nested components