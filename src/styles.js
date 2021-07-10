import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns || 'none'};
    grid-gap: 20px;
`;


export const Col = styled.div`
    display: grid;
    grid-template-rows: ${props => props.rows || 'none'};
    grid-gap: 20px;
`;


export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
