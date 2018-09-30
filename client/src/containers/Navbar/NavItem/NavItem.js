import React from 'react';
import NavItemText from '../NavItemText/NavItemText';

const navItem = ({ text, onClick, active }) => {
    return (
        <NavItemText 
            onClick={onClick}
            active={active}
        >
            {text}
        </NavItemText>
    );
}

export default navItem;