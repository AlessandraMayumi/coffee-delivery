import { Plus, Minus } from 'phosphor-react';
import { InputNumberContainer, IconContainer } from './styles';
import { useState } from 'react';

export function InputNumber() {
  const [count, setCount] = useState(1);

  function increment() {
    console.log('here');
    setCount(count + 1);
  }
  
  return (
    <InputNumberContainer>
      <IconContainer ><Minus size={12} /></IconContainer>
      <p>{count}</p>
      <IconContainer onClick={increment}><Plus size={12} /></IconContainer>
    </InputNumberContainer>
  );
}