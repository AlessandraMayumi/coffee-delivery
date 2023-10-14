import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 16rem;
    height: 19rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 6px 36px 6px 36px;

    background: ${props => props.theme['base-card']};

    text-align: center;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -2rem;
    }
    h2 {
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2';
    }
    h6 {
        color: ${props => props.theme['yellow-dark']};;
        background: ${props => props.theme['yellow-light']};
        padding: .4rem;
        border-radius: 6px;

        font-size: smaller;
        text-transform: uppercase;
    }
    p {
        color: ${props => props.theme['base-text']};;
    }
`;

export const BuyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    h2 {
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2';
    }
`;

