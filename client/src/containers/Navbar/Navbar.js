import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Container from '../../components/default/Container';
import ShadowSmall from '../../components/default/shadows/ShadowSmall';
import NavItemsList from './NavItemsList/NavItemsList';
import NavbarWrapper from './NavbarWrapper/NavbarWrapper';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import SideMenu from './SideMenu/SideMenu';
import { WHITE, PRIMARY_1 } from '../../styles/colors';

class Navbar extends Component {
    static propTypes = {
        logo: PropTypes.string.isRequired,
        navItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired, 
            path: PropTypes.string.isRequired
        })).isRequired
    }

    state = { width: 0 };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    }

    isActive = (path) => {
        const { pathname } = this.props.location;
        return pathname === path;
    }    

    renderNavItems = (navItems) => {
        const { width } = this.state;
        const { breakpoint } = this.props;

        const sideMenu = (
            <SideMenu 
              drawerColor={WHITE}
              color={PRIMARY_1}
              navItems={navItems}
            />
        );
      

        return width > breakpoint ? <NavItemsList navItems={navItems} /> : sideMenu;
    }

    render() {
        const { navItems, history, logo } = this.props;
        const navItemsWithRouting = navItems.map(({ text, path, onClick }) => (
            { 
                text, 
                onClick: onClick ? onClick : () => history.push(path),  
                active: this.isActive(path) 
            }
        ));

        return (
            <ShadowSmall>
                <Container>
                <NavbarWrapper>
                    <NavbarLogo src={logo} />
                    {this.renderNavItems(navItemsWithRouting)}
                </NavbarWrapper>
                </Container>
            </ShadowSmall>
        );
    };
}

export default withRouter(Navbar);