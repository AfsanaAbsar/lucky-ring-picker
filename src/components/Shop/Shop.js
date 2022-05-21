import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleSelectFav = (product) => {

        const newSelected = [...selected, product];
        setSelected(newSelected);
    }
    const handleReset = () => {
        setSelected('')
    }
    return (
        <div className='shop-area'>
            <div className='product-card'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleSelectFav={handleSelectFav}

                    ></Product>)
                }
            </div>
            <div>
                <SelectedItem
                    selected={selected}
                    handleReset={handleReset}
                ></SelectedItem>
            </div>
        </div>
    );
};

export default Shop;