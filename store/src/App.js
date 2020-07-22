import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import data from "./data"; // PULL IN DATA
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";

export default function App() {
  // we use data in a couple of components, so instead of pulling it into state inside of child components,
  // we manage state in the parent component (App), and pass into our children so that all data is kept in sync across app
  // this also limits calls to an API if data were from API instead of static file
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Emily's Trinkets</h1>
        <div className="nav-links">
          {/* Link is an <a> with default behavior re-written so that navigation is handled purely client-side. No server requests for new HTML/JS/CSS!*/}
          <Link to="/">Home</Link>
          <Link to="/item-list">Shop</Link>
        </div>
      </nav>
      {/* Switch is like a JS switch statement. The first "true" match with path and URL will render that route component and will breakout of Routes. Only first match will render. */}
      <Switch>
        {/* Route paths are expected shapes of the URL, similar to a regular expression (regex). 
        Routes with ":" indicate that there will be some string value that will be stored 
        as a PARAM with the key indicated after the :. In this case the param object would be:
        { itemId: <value in browser URL path> }*/}
        <Route path="/item-list/:itemID">
          {/* Wrapped Components will not receive Route props (like Home), because it does not use a render method described here: https://reacttraining.com/react-router/web/api/Route/route-render-methods
          However, we can now pass state through props when rendering JSX. To access Route values, we can use HOOKS such as useParams, and useRouteMatch to access values passed in render methods.
          */}
          <Item items={products} />
        </Route>
        <Route
          path="/item-list"
          render={props => {
            return <ItemsList items={products} {...props} />;
          }}
        />
        {/* component={Home} passes Home as a variable to render when path matches. This is using a render method that passes Route props into Home, such as 'history', 'location', and 'match', 
      however it does not allow us to declare props on Home, since HOme is a variable and not JSX */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
