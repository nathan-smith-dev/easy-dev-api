import React from 'react';
import MenuListContainer from '../MenuListContainer/MenuListContainer';
import MenuItem from '../MenuItem/MenuItem';

const menuList = ({ navItems, onClose }) => {
    return (
        <MenuListContainer>
            {navItems.map((item, index) => (
                <MenuItem 
                    key={index}
                    active={item.active}
                    onClick={() => { item.onClick(); onClose(); }}
                >
                    {item.text}
                </MenuItem>
            ))}
        </MenuListContainer>
    );
};

export default menuList;