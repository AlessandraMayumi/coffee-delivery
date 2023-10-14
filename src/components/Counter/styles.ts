import styled from 'styled-components';

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    background: ${props => props.theme['base-button']};
    p {
        font-size: large;
        font-family: 'Roboto Mono', sans-serif;
    }
    span {
        color: ${props => props.theme['purple']};
        margin: .5rem;
        &:hover {
            color: ${props => props.theme['base-title']};
        }
    }
`;
