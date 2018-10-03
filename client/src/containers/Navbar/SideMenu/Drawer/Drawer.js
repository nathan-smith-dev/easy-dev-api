import styled from 'styled-components';

export default styled.div`
    position: absolute;
    margin: 0;
    padding: 1rem 2.5rem;
    top: 0; 
    left: ${props => props.closing ? '-100%' : '0'};
    width: 60%;
    height: 100%;
    animation-name: slideIn;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    transition: left .3s ease-in-out;
    background-color: ${props => props.drawerColor};
    box-shadow: .2rem 0 .3rem 0 hsla(0, 0%, 0%, 0.2);

    @keyframes slideIn {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }
`;