import { CheckoutContainer, CompleteContainer, SelectedContainer } from './styles';
import { Payment } from './Payment';
import { Address } from './Address';
import { Order } from './Order';

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteContainer>
        <h2>Complete your order</h2>
        {Address()}
        {Payment()}
      </CompleteContainer>
      <SelectedContainer>
        <h2>Selected coffees</h2>
        {Order()}
      </SelectedContainer>
    </CheckoutContainer>
  );
}