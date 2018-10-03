import styled from 'styled-components';
import { MEDIUM_GREY_1, PRIMARY_1 } from '../../../../styles/colors';

export default styled.li`
    font-size: ${props => props.active ? '1rem' : '.9rem'};
    padding: .2rem 0;
    color: ${props => props.active ? PRIMARY_1 : MEDIUM_GREY_1};
    font-weight: ${props => props.active ? 700 : 400};
    transition: color .3s ease-in-out;

    :hover {
        color: ${PRIMARY_1};
        cursor: pointer;
    }
`;