import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// Context
import { CartContext } from '../../../context/CartContext';
// Constants
import { ROUTE_SUCCESS } from '../../../constants/routes';
// Components
import { ProductCart } from './ProductCart';
// Styles
import { TotalContainer, ButtonContainer } from './styles';

export function Order() {
  // Context
  const { cartProducts, cartCost, cartProductsCost, cartDeliveryCost } = useContext(CartContext);

  function Products() {
    if (cartProducts) {
      return cartProducts.map(product => {
        if (product) return ProductCart(product);
      });
    }
    return <></>;
  }
  return (
    <span id='order'>
      {Products()}
      <TotalContainer>
        <table>
          <tbody>
            <tr>
              <td align='left'>Total items</td>
              <td align='right'>$ {cartProductsCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td align='left'>Delivery</td>
              <td align='right'>$ {cartDeliveryCost.toFixed(2)}</td>
            </tr>
            <tr>
              <th align='left'>Total</th>
              <th align='right'>$ {cartCost.toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
      </TotalContainer>
      <NavLink to={ROUTE_SUCCESS}>
        <ButtonContainer>Confirm order</ButtonContainer>
      </NavLink>
    </span>
  );
}