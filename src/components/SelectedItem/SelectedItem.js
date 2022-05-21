import React from 'react';
import './SelectedItem.css'
const SelectedItem = ({ selected }) => {
    console.log(selected);
    let name = ''
    for (const product of selected) {
        name = name + product.name + ',';
    }
    // const { selected } = props.selected
    return (
        <div>
            <h1>Selected Rings : {selected.length}</h1>
            <h1>{name}</h1>

        </div>
    );
};

export default SelectedItem;