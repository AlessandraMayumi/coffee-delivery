import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { IconContainer } from '../styles';
import { PaymentButton, PaymentContainer } from './styles';
import { ColorTheme } from '../../../constants/ColorTheme';

export function Payment() {
  return (
    <span id='payment'>
      <nav>
        <IconContainer $colorTheme={ColorTheme.purple}><CurrencyDollar size={24} /></IconContainer>
        <div>
          <h3>Payment</h3>
          <p>Please provide the address where you would like to receive your order.</p>
        </div>
      </nav>
      <PaymentContainer>
        <PaymentButton $isSelected={false}>
          <IconContainer $colorTheme={ColorTheme.purple}><CreditCard size={24} /></IconContainer>
          <p>Credit Card</p>
        </PaymentButton>
        <PaymentButton $isSelected={false}>
          <IconContainer $colorTheme={ColorTheme.purple}><Bank size={24} /></IconContainer>
          <p>Debit Card</p>
        </PaymentButton>
        <PaymentButton $isSelected={true}>
          <IconContainer $colorTheme={ColorTheme.purple}><Money size={24} /></IconContainer>
          <p>Cash</p>
        </PaymentButton>
      </PaymentContainer>
    </span>
  );
}