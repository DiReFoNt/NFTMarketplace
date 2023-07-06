import React from 'react';
import './Card.css';
import ButtonBlack from '../UI/buttonBlack/ButtonBlack';
import Timer from '../Timer/Timer';

const Card = ({ name, price, deadline, src }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={src}  className="card-img-url"/>
            </div>
            <div className="card-title">
                <div className="card-name">
                    {name}
                </div>
                <div className="card-price">
                    <img src='./img/icons/eth.svg' />
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

export default Card;