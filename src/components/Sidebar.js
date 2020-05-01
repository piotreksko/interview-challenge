import React from "react";
import PropTypes from "prop-types";
import SingleListItem from "./SingleListItem";
import itemShape from "../shapes/itemShape";

const Sidebar = ({ items, addSelectedItem }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map((item) => (
        <SingleListItem
          key={item.id}
          item={item}
          addSelectedItem={addSelectedItem}
        />
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(itemShape),
  addSelectedItem: PropTypes.func.isRequired,
};

export default Sidebar;
