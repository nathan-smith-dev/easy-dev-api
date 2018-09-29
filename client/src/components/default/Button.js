import styled from 'styled-components';
import { LIGHT_GREY_1, DARK_1 } from '../../styles/colors';

export default styled.button`
    color: ${DARK_1};
    border: none;
    border-radius: 0.5rem;
    background-color: ${LIGHT_GREY_1};
    padding: 0.5rem;
    font-size: 1rem;

    :hover {
        cursor: pointer;
    }
`;