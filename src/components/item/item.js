import React from "react"
import PropTypes from 'prop-types';

const Item = ({items, sortedItems}) => {

    const cycle = (child) => {
        return (
            <ul className="element">
                {child.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>
                                <span>{item.label}</span>
                            </li>
                            {item.children ? cycle(item.children) : ""}
                        </div>
                    )
                })}
            </ul>
        )
    }


    return (
        <div className="list">
            <div className="items">
                <h2>Sorted</h2>
                {cycle(sortedItems)}
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

Item.propTypes = {
    items: PropTypes.array.isRequired,
    sortedItems: PropTypes.array.isRequired,
};


export default Item;
