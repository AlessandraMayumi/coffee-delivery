import styled from 'styled-components';
import { ColorTheme } from '.';

export const CartContainer = styled.div<{ colorTheme: string }>`
  display: flex;
  align-items: center;
  padding: .5rem;
  border-radius: 4px;
  background: ${props => props.colorTheme === ColorTheme.yellow ? props.theme['yellow-light'] : props.theme['purple-dark'] };
  color: ${props => props.colorTheme === ColorTheme.yellow ? props.theme['yellow-dark'] : props.theme['purple-light'] };
`;
