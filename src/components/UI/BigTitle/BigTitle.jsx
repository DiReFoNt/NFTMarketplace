import React from 'react';
import Button from '../button/Button';
import './BigTitle.css';

const BigTitle = ({ title, subtitle, buttonText, labelText }) => {
    return (
        <div className='big'>
            {title}
            <div className="big-subtitle">
                {subtitle}
            </div>
            <div className="big-buttons">
                {<Button text={buttonText} />}
                <label className='big-button-label' from="button-link">
                    <a href="index.html" className="big-button-label-link">{labelText}</a>
                </label>
            </div>
        </div>
    );
};

export default BigTitle;