import React from "react";
import SingleListItem from "./SingleListItem";

const Menu = ({ selectedItems, removeSelectedItem }) => {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {selectedItems.map((item) => (
          <SingleListItem
            key={item.id}
            item={item}
            removeSelectedItem={removeSelectedItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
