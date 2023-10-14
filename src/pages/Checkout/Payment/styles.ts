import { styled } from 'styled-components';

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