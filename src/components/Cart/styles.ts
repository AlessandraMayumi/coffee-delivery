import styled from 'styled-components';
import { ColorTheme } from '../../constants/ColorTheme';

export const CartContainer = styled.div<{ $colorTheme: string }>`
  display: flex;
  align-items: center;
  padding: .5rem;
  border-radius: 4px;
  background: ${props => props.$colorTheme === ColorTheme.yellow ? props.theme['yellow-light'] : props.theme['purple-dark']};
  color: ${props => props.$colorTheme === ColorTheme.yellow ? props.theme['yellow-dark'] : props.theme['purple-light']};
`;

export const CounterContainer = styled.div`
  position: absolute;

  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin-top: -3rem;
  margin-left: 2rem;
  padding-top: 0.2rem;

  background: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['white']};

  text-align: center;
  font-size: smaller;
`;
