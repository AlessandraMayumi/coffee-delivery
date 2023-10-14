import styled from 'styled-components';
import { ColorTheme } from '../../constants/ColorTheme';

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;

    width: 40rem;
    border-radius: 6px;
    padding: 2.5rem;

    background: ${props => props.theme['base-card']};

    h3 {
      font-weight: normal;
    }

    nav { 
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      gap: .5rem;
    }

    form {
      input {
        background: ${props => props.theme['base-input']};

        width: 100%;
        margin: .5rem 0;
        padding: .7rem;
        border-radius: 4px;
        border: 1px solid ${props => props.theme['base-button']};

        &:focus-visible {
            border: 1px solid ${props => props.theme['yellow-dark']};
        }
      }
    }
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 28rem;
    height: 19rem;
    padding: 1rem;
    border-radius: 6px 36px 6px 36px;

    background: ${props => props.theme['base-card']};
  }
`;

export const IconContainer = styled.div<{ $colorTheme: string }>`
  color: ${props => props.$colorTheme === ColorTheme.yellow ? props.theme['yellow-dark'] : props.theme['purple']};
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const PaymentButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;

  width: 11rem;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  gap: 1rem;

  border: 1px solid ${props => props.$isSelected ? props.theme['purple'] : props.theme['base-button']};
  background: ${props => props.$isSelected ? props.theme['purple-light'] : props.theme['base-button']};
  p {
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};
  }
  &:hover {
    border: 1px solid ${props => props.$isSelected ? props.theme['purple'] : props.theme['base-hover']};
    background: ${props => props.$isSelected ? props.theme['purple-light'] : props.theme['base-hover']};
    p {
      text-transform: uppercase;
      color: ${props => props.$isSelected ? props.theme['base-text'] : props.theme['base-subtitle']};
    }
  }
`;