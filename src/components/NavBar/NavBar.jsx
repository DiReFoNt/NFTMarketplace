import React from 'react';
import './NavBar.css';
import Button from '../UI/button/Button';

const NavBar = () => {

    return (
        <div className='nav'>
            <div className="nav-items">
                <div className="nav-item">
                    <a href="#" className="nav-item-link">Marketplace</a></div>
                <div className="nav-item">
                    <a href="#" className="nav-item-link">Artists</a></div>
                <div className="nav-item">
                    <a href="#" className="nav-item-link">Community</a></div>
                <div className="nav-item">
                    <a href="#" className="nav-item-link">Collections</a></div>
            </div>
            {<Button text={'Contact'} />}
        </div>
    );
};

export default NavBar;