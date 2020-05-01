import PropTypes from "prop-types";

const itemShape = PropTypes.shape({
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    dietaries: PropTypes.arrayOf(PropTypes.string),
  }),
});

export default itemShape;
