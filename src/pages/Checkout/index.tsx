import { MapPinLine } from 'phosphor-react';
import { CheckoutContainer, CompleteContainer, OrderContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteContainer>
        <h2>Complete your order</h2>
        <span>
          <nav>
            <i><MapPinLine size={24} /></i>
            <div>
              <h3>Delivery Address</h3>
              <p>Please provide the address where you would like to receive your order</p>
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
        <span>Payment</span>
      </CompleteContainer>
      <OrderContainer>
        <h2>Selected coffees</h2>
        <span>Total</span>
      </OrderContainer>
    </CheckoutContainer>
  );
}