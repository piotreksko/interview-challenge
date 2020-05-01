import React from "react";
import PropTypes from "prop-types";
import itemShape from "../shapes/itemShape";
import DietariesCount from "./DietariesCount";

const Header = ({ selectedItems }) => {
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedItems.length} items</span>
          </div>
          <DietariesCount selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  selectedItems: PropTypes.arrayOf(itemShape),
};

export default Header;
