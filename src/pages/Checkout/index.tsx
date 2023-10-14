import { CheckoutContainer, CompleteContainer, OrderContainer } from './styles';
import { Payment } from './Payment';
import { Address } from './Address';

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteContainer>
        <h2>Complete your order</h2>
        {Address()}
        {Payment()}
      </CompleteContainer>
      <OrderContainer>
        <h2>Selected coffees</h2>
        <span>Total</span>
      </OrderContainer>
    </CheckoutContainer>
  );
}