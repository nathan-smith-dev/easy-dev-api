import styled from 'styled-components';

export default styled.div`
    width: ${props => props.rotation ? '20px' : '28px'};
    height: 3px;
    background-color: ${props => props.color};
    margin: 5px 0;
    transition: 0.3s;
    transform: ${props => props.rotation ? props.rotation : null};
    opacity: ${props => props.fade ? 0 : null}
`;