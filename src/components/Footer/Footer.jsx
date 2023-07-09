import React from 'react';
import { FooterTable } from '../index.jsx';
import '../../styles/Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-title">
                    <div className="footer-title-text">
                        Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!
                    </div>
                    <div className="footer-title-icons">
                        <a href="" className="footer-title-icon-link">
                            <img src="./img/icons/facebook.svg" alt="" className="footer-title-icon" />

                        </a>
                        <a href="" className="footer-title-icon-link">
                            <img src="./img/icons/telegram.svg" alt="" className="footer-title-icon" />

                        </a>
                        <a href="" className="footer-title-icon-link">
                            <img src="./img/icons/twiter.svg" alt="" className="footer-title-icon" />

                        </a>
                        <a href="" className="footer-title-icon-link">
                            <img src="./img/icons/linkedin.svg" alt="" className="footer-title-icon" />

                        </a>
                    </div>
                </div>
                <FooterTable />
            </div>
            <div className="footer-subcontent">
                <div className="footer-subcontent-copyright">
                    <a className='footer-subcontent-link' href="">© Copyright 2023 - davixq</a>
                </div>
                <div className="footer-subcontent-policy">
                    <a className='footer-subcontent-link' href="">
                        <span>Privacy Policy</span>
                    </a>
                    <a className='footer-subcontent-link' href="">
                        <span>Terms & Conditions</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export {Footer};