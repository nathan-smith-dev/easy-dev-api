import React, { Component, Fragment } from 'react'; 
import PropTypes from 'prop-types';
import Drawer from './Drawer/Drawer';
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu';
import MenuList from './MenuList/MenuList';

class SideMenu extends Component {
    state = { open: false, closing: false, closed: true };

    static propTypes = {
        color: PropTypes.string.isRequired, 
        drawerColor: PropTypes.string.isRequired, 
        navItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            path: PropTypes.string, 
            onClick: PropTypes.func
        })).isRequired
    };

    handleToggle = () => {
        const { open } = this.state;
        !open ? 
            this.setState({ open: true, closed: false }) 
            : this.handleToggleClose();
    };

    handleToggleClose = () => {
        this.setState({ closing: true, closed: true }, () => {
            setTimeout(() => {
                this.setState({ open: false, closing: false });
            }, 300);
        });
    };

    renderSideDrawer() {
        const { drawerColor, navItems } = this.props; 
        const { open, closing } = this.state;

        const menuOptions = (
            <MenuList 
                navItems={navItems}
                onClose={this.handleToggleClose}
            />
        );

        return open ? 
        <Drawer drawerColor={drawerColor} closing={closing}>
            {menuOptions}
        </Drawer> 
        : null;
    };

    render() {
        const { color } = this.props;
        const { closed } = this.state;
        return (
            <Fragment>
                <HamburgerMenu 
                    color={color}
                    onClick={this.handleToggle}
                    open={!closed}
                />
                {this.renderSideDrawer()}
            </Fragment>
        );
    };
}

export default SideMenu;