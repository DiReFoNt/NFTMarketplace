import React from 'react';
import { Button } from '../UI';
import '../../styles/NavBar.css';

const NavBar = () => {

    return (
        <div className='nav'>
            <div className="nav-items">
                <div className="nav-item">
                    <a href="#main" className="nav-item-link">Main</a></div>
                <div className="nav-item">
                    <a href="#marketplace" className="nav-item-link">Marketplace</a></div>
                <div className="nav-item">
                    <a href="#community" className="nav-item-link">Community</a></div>

                <div className="nav-item">
                    <a href="#artists" className="nav-item-link">Artists</a></div>
            </div>
            {<Button text={'Contact'} link={'#contact'} />}
        </div>
    );
};

export {NavBar};