import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { product, handleSelectFav } = props;
    const { name, price, img } = product;
    return (
        <div className='product'>

            <img className='product-img' src={img} alt="" />
            <h3 className='ring-name'>{name}</h3>
            <h4>Price : ${price}</h4>
            <button className='select-btn' onClick={() => handleSelectFav(product)}>Select As Favourite <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;