import React from 'react';
import './Button.css';

const Button = ( {label, onClick, disabled = false, variant = 'primary' }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

export default Button;