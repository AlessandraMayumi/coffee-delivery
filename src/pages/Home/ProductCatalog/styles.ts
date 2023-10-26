import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 16rem;
    height: 19rem;
    padding: 1rem;
    border-radius: 6px 36px 6px 36px;

    background: ${props => props.theme['base-card']};

    text-align: center;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -2rem;
    }
    p {
        color: ${props => props.theme['base-label']};;
    }
`;

export const BuyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: .2rem;
`;

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;

    h3 {
        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
        padding: .3rem;
        border-radius: 6px;

        font-size: smaller;
        text-transform: uppercase;
    }
`;

/**
 * Cart button
 */

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  padding: .5rem;
  border-radius: 4px;
  border: none;
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
  &:hover {
    background: ${props => props.theme['purple']};
    }
`;
