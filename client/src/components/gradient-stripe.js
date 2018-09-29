import styled from 'styled-components';
import { PRIMARY_1, PRIMARY_2} from '../styles/colors';

export default styled.div`
    height: 3px;
    width: 100%;
    background: ${PRIMARY_1}; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, ${PRIMARY_1}, ${PRIMARY_2}); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, ${PRIMARY_1}, ${PRIMARY_2}); 
`;