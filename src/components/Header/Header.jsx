import React from 'react';
import './Header.css';
import Button from '../Button/Button.jsx';


const Header = ({title, buttons}) => {
    return (
        <header className="header">
            {title}
            <div className='header-buttons'>
                {buttons.map((button, index) => (
                    <Button key={index} label={button.label} onClick={button.onClick} />
                ))}
            </div>
        </header>
    )
}

export default Header;
