import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    
    width: 23rem;
    height: 5rem;
    padding-bottom: 6rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    
    width: 4rem;
    height: 4rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 12rem;

    h3 {
        margin-bottom: 1rem;
    }
`;

export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 6rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    border: none;

    background: ${props => props.theme['base-button']};
    p {
        text-transform: uppercase;
    }
`;

export const IconContainer = styled.div`
    color: ${props => props.theme['purple']}
`;
