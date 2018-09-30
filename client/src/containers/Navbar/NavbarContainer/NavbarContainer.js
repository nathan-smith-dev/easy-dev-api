import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;

    div:not(:last-child) {
        padding-right: 1rem;
    }
`;