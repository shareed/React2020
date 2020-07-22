import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import ItemShipping from "./ItemShipping";
import ItemDescription from "./ItemDescription";

// we will be importing and adding a lot of items to this component
function Item(props) {

  // useParams https://reacttraining.com/react-router/web/api/Hooks/useparams
  // returns an object of key/value pairs of URL parameters (keys declared with colon in Route path). Use it to access match.params of the current <Route>.
  // we need to use useParams when we do not use a render method of route (component= or render= in Route JSX)
  const params = useParams();


  // useRouteMatch https://reacttraining.com/react-router/web/api/Hooks/useroutematch
  // useRouteMatch hook attempts to match the current URL in the same way that a <Route> would
  // it provides a path (like what we declare in a Route), and the current url (what we see in the browser)
  const { path, url } = useRouteMatch();

  // pull array of objects from props.items (this is the products stored in App state)
  // iterate over each object to find the object that has the same id as the one in the URL (params.itemID)
  // .find() is arr fn that returns first valid result. id is unique so this should return the correct object
  // compare item.id is a number and params.itemID is a string, so make the string a number to compare values correctly.
  const shopItem = props.items.find(item => item.id === Number(params.itemID));
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        {/* NavLinks are links that if the "to" matches the current url, the a tag has a className="active" applied automatically
        They are really useful for tabs, as shown here.
        
        Both "to" declarations are equivalent. One is using useRouteMatch and the other hardcodes URL for Link.*/}
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`/item-list/${shopItem.id}/shipping`}>Shipping</NavLink>
      </nav>
      {/* Both "path" declarations are equivalent. One is useing useRouteMatch and the other hardcodes path for Route
    
      These Routes create "nested routes". Meaning that when Item is rendered, the Routes are declared and then the url is compared against
      these new Routes. If there is a match that in addition to the Item rendering, then the matching sub-component will render as well.*/}
      <Route exact path={`/item-list/:itemID/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
      <Route exact path={`${path}/description`}>
        <ItemDescription item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;
