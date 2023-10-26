import { Plus, Minus } from 'phosphor-react';
import { InputNumberContainer, IconContainer } from './styles';

interface InputNumberProps {
  quantity: number,
  minus: () => void,
  plus: () => void,
}

export function InputNumber({ quantity, minus, plus }: InputNumberProps) {

  return (
    <InputNumberContainer>
      <IconContainer onClick={minus}><Minus size={12} /></IconContainer>
      <p>{quantity}</p>
      <IconContainer onClick={plus}><Plus size={12} /></IconContainer>
    </InputNumberContainer>
  );
}