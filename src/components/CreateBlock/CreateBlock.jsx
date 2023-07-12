import React from 'react';
import { Button } from '../UI';
import '../../styles/CreateBlock.css';


const CreateBlock = () => {
    return (
        <section className='nft-block' id='community'>
            <div className="nft-content">
                <div className="big-title" style={{ fontSize: 48 , width:462}}>
                    Create And Sell
                    Your
                    <span className="colortext"> Best NFTs</span>
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
                <img src="/img/nft-block-1.png" alt="women cyber with red line in face nft" className="nft-block-img-src up-img" />
                <img src="/img/nft-block-2.png" alt="japan women nft" className="nft-block-img-src down-img" />

            </div>
        </section>
    );
};

export {CreateBlock};