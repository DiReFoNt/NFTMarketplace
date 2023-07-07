import React from 'react';
import './Button.css';

const Button = ({text, className,link}) => {
    return (
        <a href={link} className={"button-link " + className }>
            <button className="button" name='content-button'>{text}</button>
        </a>
    );
};

export {Button};