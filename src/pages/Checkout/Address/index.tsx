import { useContext } from 'react';
import { MapPinLine } from 'phosphor-react';
// Context
import { AddressContext } from '../../../context/AddressContext';
// Styles
import { ColorTheme } from '../../../constants/ColorTheme';
import { FormContainer } from './styles';
import { IconContainer } from '../styles';

export function Address() {
  const { updateAddressByField } = useContext(AddressContext);

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
        <input type='text' placeholder='ZIP/Postal Code *' onChange={e => updateAddressByField('zip', e.target.value)} />
        <input type='text' placeholder='State/Province *' onChange={e => updateAddressByField('state', e.target.value)} />
        <input type='text' placeholder='City *' onChange={e => updateAddressByField('city', e.target.value)} />
        <input type='text' placeholder='Address *' onChange={e => updateAddressByField('address', e.target.value)} />
        <input type='text' placeholder='Complement' onChange={e => updateAddressByField('complement', e.target.value)} />
      </FormContainer>
    </span>
  );
}