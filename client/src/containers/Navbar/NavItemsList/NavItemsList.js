import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from '../NavbarContainer/NavbarContainer';
import NavItem from '../NavItem/NavItem';

const navItemsList = ({ navItems }) => {
    return (
        <NavbarContainer>
            {navItems.map(({ text, onClick, active }, index) => (
                <NavItem 
                    active={active}
                    key={index} 
                    text={text} 
                    onClick={onClick} 
                />
            ))}
        </NavbarContainer>
    );
}

navItemsList.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired, 
        onClick: PropTypes.func.isRequired, 
        active: PropTypes.bool.isRequired
    })).isRequired
};

export default navItemsList;