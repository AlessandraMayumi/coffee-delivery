import styled from 'styled-components';

export const TotalContainer = styled.div`
    margin-bottom: 1rem;
    table {
        width: 23rem;
    }
    td {
        font-weight: normal;
        padding-bottom: .5rem;
    }
    th {
        font-size: large;
    }
`;

export const ButtonContainer = styled.button`
    width: 23rem;
    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    border: none;
    border-radius: 6px;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
`;
