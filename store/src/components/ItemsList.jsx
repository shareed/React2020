import React from "react";
import { Link, useHistory } from "react-router-dom";

// what do we need to add to this component so we can map through items?

function ItemsList(props) {
  const { push, goBack } = useHistory();
  const { items } = props; // equivalent to items = props.items
  console.log(props);
  return (
    <div className="items-list-wrapper">
      <button onClick={() => goBack()}>Go Back</button>
      {items.map(item => (
        <div className="item-card" key={item.id}>
          {/* We made the entire image a Link so that if you click on the img
          in the store, we will navigate to that item id's page with the dynamic Link "to" string.*/}
          <Link to={`/item-list/${item.id}/description`}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
