import { Plus, Minus } from 'phosphor-react';
import { InputNumberContainer, IconContainer } from './styles';

export function InputNumber() {
  return (
    <InputNumberContainer>
      <IconContainer><Minus size={12} weight='bold' /></IconContainer>
      <p>1</p>
      <IconContainer><Plus size={12} weight='bold' /></IconContainer>
    </InputNumberContainer>
  );
}