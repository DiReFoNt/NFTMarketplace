import React from 'react';
import './CreateBlock.css';
import Button from '../UI/button/Button';

const CreateBlock = () => {
    return (
        <div className='nft-block'>
            <div className="nft-content">
                <div className="big-title" style={{ fontSize: 48 , width:462}}>
                    Create And Sell
                    Your
                    <span className="colortext">
                        {" Best NFTs"}
                    </span>
                </div>
                <div className="big-subtitle">
                    Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!                </div>
                <div className="big-buttons">
                    {<Button text={'Create Now'} />}
                    <label className='big-button-label' from="button-link">
                        <a href="index.html" className="big-button-label-link">Learn More</a>
                    </label>
                </div>
            </div>
            <div className="nft-block-img">
                <img src="/img/nft-block-1.png" alt="" className="nft-block-img-src up-img" />
                <img src="/img/nft-block-2.png" alt="" className="nft-block-img-src down-img" />

            </div>
        </div>
    );
};

export default CreateBlock;