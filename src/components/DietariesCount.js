import React from "react";
import PropTypes from "prop-types";
import itemShape from "../shapes/itemShape";

const DietariesCount = ({ selectedItems }) => {
  const count = {};
  selectedItems.forEach((item) => {
    item.dietaries.forEach((dietary) => {
      if (!count[dietary]) {
        count[dietary] = 1;
      } else {
        count[dietary] += 1;
      }
    });
  });

  return (
    <div className="col-6 menu-summary-right">
      {Object.entries(count).map(([key, value]) => (
        <React.Fragment key={key}>
          {value}x <span className="dietary">{key}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

DietariesCount.propTypes = {
  selectedItems: PropTypes.arrayOf(itemShape),
};

export default DietariesCount;
