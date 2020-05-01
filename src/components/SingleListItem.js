import React from "react";
import PropTypes from "prop-types";
import itemShape from "../shapes/itemShape";

const SingleListItem = ({ item, addSelectedItem, removeSelectedItem }) => {
  return (
    <li
      className="item"
      onClick={addSelectedItem ? () => addSelectedItem(item) : null}
    >
      <h2>{item.name}</h2>
      <p>
        {item.dietaries.map((dietary) => (
          <span key={dietary} className="dietary">
            {dietary}
          </span>
        ))}
      </p>
      {removeSelectedItem && (
        <button
          className="remove-item"
          onClick={() => removeSelectedItem(item.id)}
        >
          x
        </button>
      )}
    </li>
  );
};

SingleListItem.propTypes = {
  item: itemShape.isRequired,
  removeSelectedItem: PropTypes.func,
};

export default SingleListItem;
