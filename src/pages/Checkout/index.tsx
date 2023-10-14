import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { CheckoutContainer, CompleteContainer, IconContainer, OrderContainer, PaymentButton, PaymentContainer } from './styles';
import { ColorTheme } from '../../constants/ColorTheme';

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteContainer>
        <h2>Complete your order</h2>
        <span id='address'>
          <nav>
            <IconContainer $colorTheme={ColorTheme.yellow}><MapPinLine size={24} /></IconContainer>
            <div>
              <h3>Delivery Address</h3>
              <p>Please provide the address where you would like to receive your order.</p>
            </div>
          </nav>
          <form>
            <input type='text' placeholder='ZIP/Postal Code *' />
            <input type='text' placeholder='State/Province *' />
            <input type='text' placeholder='City *' />
            <input type='text' placeholder='Address *' />
            <input type='text' placeholder='Apartment' />
          </form>
        </span>
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
      </CompleteContainer>
      <OrderContainer>
        <h2>Selected coffees</h2>
        <span>Total</span>
      </OrderContainer>
    </CheckoutContainer>
  );
}