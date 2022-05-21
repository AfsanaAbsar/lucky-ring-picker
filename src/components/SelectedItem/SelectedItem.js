import React from 'react';
import './SelectedItem.css'
const SelectedItem = ({ selected }) => {
    console.log(selected);
    // const { selected } = props.selected
    return (
        <div>
            <h1>{selected.length}</h1>

        </div>
    );
};

export default SelectedItem;