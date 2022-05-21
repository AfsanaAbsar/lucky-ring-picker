import React from 'react';
import './SelectedItem.css'
const SelectedItem = ({ selected }) => {

    let name = ''
    for (const product of selected) {
        name = name + product.name + ',';



        // const choose = Math.random();
        // console.log(choose);
    }
    let id = []
    for (const product of selected) {
        id = [...id, product.name]


        // items[Math.floor(Math.random()*items.length)
    }
    const handleChoose = () => {
        console.log(id);
        const choose = id[Math.floor(Math.random() * id.length)];
        console.log(choose);
        if (choose) {
            document.getElementById('selected-items').innerHTML = `
                  
           
            <h1>${choose}</h1>
            `
        }


    }
    // const { selected } = props.selected
    return (
        <div id="selected-items">
            <h1>Selected Rings : {selected.length}</h1>
            <h1>{name}</h1>
            <button onClick={() => handleChoose()}>hhhh</button>


        </div>
    );
};

export default SelectedItem;