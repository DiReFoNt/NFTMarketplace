import React from 'react';
import './SmallTitle.css';
import Button from '../button/Button';

const SmallTitle = ({ text, buttonText }) => {
    return (
        <div className="low-title">
            <div className="low-content">
                {text}
            </div>
            {<Button text={buttonText} />}
        </div>
    );
};

export default SmallTitle;