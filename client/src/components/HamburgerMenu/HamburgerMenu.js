import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar/Bar';
import Wrapper from './Wrapper';

const hamburgerMenu = ({ open, color, onClick }) => {
    const rotationCounterClockwise = open ? 'rotate(-45deg) translate(-5px, 5px)' : null;
    const rotationClockwise = open ? 'rotate(45deg) translate(-6px, -6px)' : null;
    return (
        <Wrapper onClick={onClick}>
            <Bar rotation={rotationCounterClockwise} color={color} />
            <Bar fade={open} color={color} />
            <Bar rotation={rotationClockwise} color={color} />
        </Wrapper>
    );
};

hamburgerMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired
};


export default hamburgerMenu;