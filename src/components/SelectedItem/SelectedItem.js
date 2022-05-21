import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedItem.css'
const SelectedItem = ({ selected, handleReset }) => {

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
                  
            
            <h3>Your Lucky Ring : ${choose}</h3>
           
            `
        }


    }
    // const { selected } = props.selected
    return (
        <div id="selected-items">
            <h2>Selected Rings : {selected.length}</h2>
            <h3>{name}</h3>
            <button className='choose-btn' onClick={() => handleChoose()}>Choose One <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button><br />
            <button className='reset-btn' onClick={() => handleReset()}> Reset <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon></button>


        </div>
    );
};

export default SelectedItem;