import React from 'react';
import { Timer } from '../index.jsx';
import { Button } from '../UI';
import '../../styles/Main.css';

const Main = () => {
    return (
        <main>
            <section className="main" id='main'>
                <div className="content">
                    <div className="big-title">
                        Discover and
                        Collect The Best NFTs <br/>
                        <span className="colortext">
                            Digital Art.
                        </span>
                    </div>
                    <div className="big-subtitle">
                        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
                    </div>
                    <div className="big-buttons">
                        {<Button text={'Explore Now'} />}
                        <label className='big-button-label' from="button-link">
                            <a href="index.html" className="big-button-label-link">Learn More</a>
                        </label>
                    </div>
                    <div className="content-static">
                        <div className="content-static-item">
                            <div className="content-static-item-title"><span className="colortext">8.9</span>K</div>
                            <div className="content-static-item-subtitle">Art work</div>
                        </div>
                        <div className="content-static-item">
                            <div className="content-static-item-title"><span className="colortext">65</span>K</div>
                            <div className="content-static-item-subtitle">Artist</div>
                        </div>
                        <div className="content-static-item">
                            <div className="content-static-item-title"><span className="colortext">87</span>K</div>
                            <div className="content-static-item-subtitle">Collection</div>
                        </div>
                    </div>
                </div>
                <div className="main-img">
                    <img src='/img/mainimg.png' alt="robot woman img nft" className='main-img-url' />
                    <div className="main-img-table">
                        <div className="main-img-table-info">
                            <div className="main-img-table-time">
                                Ends in
                                {<Timer deadline={"Jule, 28 , 2023"} />}
                            </div>
                            <div className="main-img-table-bid">Current bid
                                <p className='main-img-table-bid-value'>
                                    0.24ETH
                                </p>
                            </div>
                            <a href="index.html" className="button-content-link">
                                <button className="button-content">Place A Bid</button>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export {Main};