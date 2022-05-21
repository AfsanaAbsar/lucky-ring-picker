import React from 'react';
import './Product.css'
const Product = (props) => {
    const { product, handleSelectFav } = props;
    const { name, price, ratings, img } = product;
    return (
        <div className='product'>

            <img className='product-img' src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : ${price}</h4>
            <button onClick={() => handleSelectFav(product)}>Select As Favourite</button>

        </div>
    );
};

export default Product;