import { MapPinLine } from 'phosphor-react';
import { IconContainer } from '../styles';
import { ColorTheme } from '../../../constants/ColorTheme';
import { FormContainer } from './styles';

export function Address() {
  return (
    <span id='address'>
      <nav>
        <IconContainer $colorTheme={ColorTheme.yellow}><MapPinLine size={24} /></IconContainer>
        <div>
          <h3>Delivery Address</h3>
          <p>Please provide the address where you would like to receive your order.</p>
        </div>
      </nav>
      <FormContainer>
        <input type='text' placeholder='ZIP/Postal Code *' />
        <input type='text' placeholder='State/Province *' />
        <input type='text' placeholder='City *' />
        <input type='text' placeholder='Address *' />
        <input type='text' placeholder='Apartment' />
      </FormContainer>
    </span>
  );
}