import React from 'react';
import { Timer } from '../index.jsx';
import { ButtonBlack } from '../UI/index.jsx';
import '../../styles/Card.css';

const Card = ({ name, price, deadline, src }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={src}  className="card-img-url" alt={name}/>
            </div>
            <div className="card-title">
                <div className="card-name">
                    {name}
                </div>
                <div className="card-price">
                    <img src='./img/icons/eth.svg' alt='author logo'/>
                    {price}ETH
                </div>
            </div>
            <div className="card-subtitle">
                <div className="card-subtitle-timer">
                    Ending In
                    {<Timer deadline={deadline} />}
                </div>
                {<ButtonBlack />}
            </div>
        </div>
    );
};

export {Card};