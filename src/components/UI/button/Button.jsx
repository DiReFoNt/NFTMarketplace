import React from 'react';
import './Button.css';

const Button = ({text, className}) => {
    return (
        <a href="index.html" className={"button-link " + className }>
            <button className="button" name='content-button'>{text}</button>
        </a>
    );
};

export default Button;