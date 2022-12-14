import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='nav-bar'>
                <div>
                    <h2 className='logo'>Diamond shop</h2>
                </div>
                <div >
                    <a href="/Home">Home</a>
                    <a href="/Product">Product</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="/LogIn">Log In</a>
                </div>
            </div>
            <div className='heading-title'><h1>Get Your Favourite Diamond</h1></div>
        </div>
    );
};

export default Header;