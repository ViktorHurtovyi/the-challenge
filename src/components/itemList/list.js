import React from "react"
import PropTypes from 'prop-types';

const List = ({ items, sortedItems }) => {
  return (
    <div className="list">
      <div className="items">
        <h2>Sorted</h2>
        {sortedItems}
      </div>
      <div className="items">
        <ul>
          <h2>Default</h2>
          {items.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

List.propTypes  = {
    items: PropTypes.array.isRequired,
    sortedItems: PropTypes.object.isRequired,
};


export default List;
