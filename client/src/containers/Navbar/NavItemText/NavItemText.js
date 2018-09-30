import styled from 'styled-components';
import { DARK_1, MEDIUM_GREY_1, PRIMARY_1 } from '../../../styles/colors';

export default styled.div`
    transition: font-size .1s ease-in-out;
    font-size: ${props => props.active ? '1rem' : '.9rem'};
    color: ${props => props.active ? PRIMARY_1 : MEDIUM_GREY_1};
    :hover {
        cursor: ${props => props.active ? null : 'pointer'};
        color: ${props => props.active ? null : DARK_1}
    }
`;