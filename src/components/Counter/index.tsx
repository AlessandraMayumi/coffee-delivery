import { Plus, Minus } from 'phosphor-react';
import { CounterContainer } from './styles';

export function Counter() {
  return (
    <CounterContainer>
      <span><Minus size={12} weight='bold' /></span>
      <p>1</p>
      <span><Plus size={12} weight='bold' /></span>
    </CounterContainer>
  );
}