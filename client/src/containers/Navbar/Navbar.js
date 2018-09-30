import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Container from '../../components/default/Container';
import ShadowSmall from '../../components/default/shadows/ShadowSmall';
import NavItemsList from './NavItemsList/NavItemsList';
import NavbarWrapper from './NavbarWrapper/NavbarWrapper';
import NavbarLogo from './NavbarLogo/NavbarLogo';

class Navbar extends Component {
    static propTypes = {
        sidebar: PropTypes.element.isRequired,
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
        const { breakpoint, sidebar } = this.props;
        return width > breakpoint ? <NavItemsList navItems={navItems} /> : sidebar
    }

    render() {
        const { navItems, history, logo } = this.props;
        const navItemsWithRouting = navItems.map(({ text, path }) => (
            { text, onClick: () => history.push(path),  active: this.isActive(path) }
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