import styled from 'styled-components';
import { 
    BREAKPOINT_XSMALL, 
    BREAKPOINT_SMALL, 
    BREAKPOINT_MEDIUM, 
} from '../styles/breakpoints';

export default styled.div`
    padding: 0 0.5rem;
    transition: all 0.3s ease-in-out;
    
    @media only screen and (min-width: ${BREAKPOINT_XSMALL}) {
        padding: 0 1.5rem;
    }
    @media only screen and (min-width: ${BREAKPOINT_SMALL}) {
        padding: 0 4rem;
    }
    @media only screen and (min-width: ${BREAKPOINT_MEDIUM}) {
        padding: 0 8rem;
    }
`;