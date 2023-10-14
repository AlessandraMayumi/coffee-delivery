import styled from 'styled-components';
import { ColorTheme } from '../../constants/ColorTheme';

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;

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
  }
`;

export const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    width: 40rem;
    border-radius: 6px;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    width: 28rem;
    border-radius: 6px 36px 6px 36px;
  }
`;

export const IconContainer = styled.div<{ $colorTheme: string }>`
  color: ${props => props.$colorTheme === ColorTheme.yellow ? props.theme['yellow-dark'] : props.theme['purple']};
`;
