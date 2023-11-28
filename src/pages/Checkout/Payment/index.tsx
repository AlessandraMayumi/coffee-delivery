import { useContext } from 'react';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { PaymentContext, PaymentMethod } from '../../../context/PaymentContext';
import { ColorTheme } from '../../../constants/ColorTheme';
import { IconContainer } from '../styles';
import { PaymentButton, PaymentContainer } from './styles';

export function Payment() {
  const { method, updateMethod } = useContext(PaymentContext);

  return (
    <span id='payment'>
      <nav>
        <IconContainer $colorTheme={ColorTheme.purple}><CurrencyDollar size={24} /></IconContainer>
        <div>
          <h3>Payment</h3>
          <p>Payment is made upon delivery. Choose the method you wish to pay with.</p>
        </div>
      </nav>
      <PaymentContainer>
        <PaymentButton $isSelected={method === PaymentMethod.CREDIT_CARD} onClick={() => updateMethod(PaymentMethod.CREDIT_CARD)}>
          <IconContainer $colorTheme={ColorTheme.purple}><CreditCard size={24} /></IconContainer>
          <p>Credit Card</p>
        </PaymentButton>
        <PaymentButton $isSelected={method === PaymentMethod.DEBIT_CARD } onClick={() => updateMethod(PaymentMethod.DEBIT_CARD)}>
          <IconContainer $colorTheme={ColorTheme.purple}><Bank size={24} /></IconContainer>
          <p>Debit Card</p>
        </PaymentButton>
        <PaymentButton $isSelected={method === PaymentMethod.CASH} onClick={() => updateMethod(PaymentMethod.CASH)}>
          <IconContainer $colorTheme={ColorTheme.purple}><Money size={24} /></IconContainer>
          <p>Cash</p>
        </PaymentButton>
      </PaymentContainer>
    </span>
  );
}