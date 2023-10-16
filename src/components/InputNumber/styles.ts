import styled from 'styled-components';

export const InputNumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 4.5rem;
    height: 2rem;
    border-radius: 6px;

    background: ${props => props.theme['base-button']};
    p {
        font-size: large;
        font-family: 'Roboto Mono', sans-serif;
    }
`;

export const IconContainer = styled.div`
    color: ${props => props.theme['purple']};
    margin: .5rem;
    &:hover {
        color: ${props => props.theme['base-title']};
    }
`;
