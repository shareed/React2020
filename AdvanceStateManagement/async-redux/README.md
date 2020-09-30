This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
# Async Redux

## A visual example
Here's the Redux data flow visualized, with the addition of asynchronous API calls:
![async Redux gif](img/redux_async.gif)

## A real-world example
Back to our coffee shop. Let's consider just the step where we actually make the coffee.

When we dispatch `'MAKE_COFFEE'`, we're actually looking to trigger a sequence of coffee-making actions. We could of course break everything down into individual steps, but all actions in Redux are **synchronous** by default. This means that each step has to complete before the next one starts. But would we really want to just watch the beans grind when we could be getting things done more efficently with some multiasking?

Enter `redux-thunk`, A *middleware* that extends the functionality of Redux, allowing our actions to dispatch actions of their own and introduce more advanced behavior like API calls.

Rather than simply passing an action type and payload to the reducer, we can start multiple processes at once and set up some intelligent multitasking. Start the bean grinder, then steam some milk while the beans grind. Once the beans are ground, then we can start the espresso machine. Once the espresso is brewed and milk frothed, then we can put it all together and serve the drink. All of that work can be divided up in an efficient way, even split among multiple employees and several espresso machines to handle more than one order at once. A production-scale web app may look more like a complex factory than a coffee shop, so this organization and asynchronous behavior becomes essential.

Note that there's a specific order of operations, with some actions requiring others to complete before they can begin (for example: you need to grind beans before brewing espresso).  *Synchronous* behavior means that all actions take place in sequential order, each waiting for the previous action to complete before starting. *Asynchronous* actions, on the other hand, can take place simultaneously and only wait for others when absolutely necessary. This more nuanced order of operations, known as **asynchronous / non-blocking** behavior, is the key to the fast, responsive feel of modern single-page applications backed by an API.

This kind of thing is common with asynchronous actions like API calls in React applications -- start the process, go do something else, then come back to handle the response when it's complete. When the code gets confusing, remember this example to understand what asynchronous actions are all about. 

Here's how that `'MAKE_COFFEE'` step might look, as a more complex action that dispatches actions of its own:
  * Dispatch `'GRIND_BEANS'`
  * Dispatch `'FROTH_MILK'`
  * When bean grinding is complete, dispatch `'BREW_ESPRESSO'`
  * when `'BREW_ESPRESSO'` and `'FROTH_MILK'` are complete, dispatch `'PREPARE_MACCHIATO'`
  * when macchiato is complete, update application state with `status: "complete"`

Note the inherent multitasking involved -- this approach allows optimization and higher customer volume, because no one is stopping to stare while the beans grind :)

## [Redux Middleware](./img/reduxmiddleware.jpg)
In the context of Redux, middleware is a way to extend the standard functionality with additional behavior, Middleware provides a third-party extension point after an action is disaptched, before it reaches the reducer:

Dispatching an action
->
middleware
->
Action reaching the reducer

Redux middleware is often used for logging, crash reporting, talking to an asynchronous API, routing, and more. `redux-logger` and `redux-thunk` are common examples of middleware used with Redux.

## How to use middleware in Redux
Redux library provides a function called applyMiddleware. This gets applied like this:

```javascript
const logger = reduxLogger.createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
```

## [Asynchronous requests and redux-thunk](./img/thunk)
In Redux, our reducers are *synchronous* by default. If we need to perform asynchronous operations, they need to happen before the actions reach the reducers. So this is why we use middleware to handle asynchronous requests. 

"Thunk" is a name for a function that’s returned by another function. In Redux, actions are normally just objects, but Redux-thunk allows us to return functions instead of objects from our action creators, enabling more dynamic behavior. Then those functions can handle side effects like api calls, and also return regular actions to be handled by the reducer.

Here's a typical setup:
* Use redux-thunk as a middleware, and define async action creators
* Within those async actions, use axios to make requests to an api endpoint

## Helpful Resources
* [Handling Asynchronous Actions in Redux](https://medium.com/better-programming/handling-asynchronous-actions-in-redux-86724ed87c6c)
* [Redux by TL Megan Miller](https://www.notion.so/Redux-3ac5db784a1e4a1dbe9ecc7c15bbd9fd)
* [Redux applyMiddleware docs](https://redux.js.org/api/applymiddleware)
* [What is a thunk?](https://daveceddia.com/what-is-a-thunk/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Redux-thunk1](./img/thunk1)
* [Redux-thunk2](./img/thunk2)



[ ] 