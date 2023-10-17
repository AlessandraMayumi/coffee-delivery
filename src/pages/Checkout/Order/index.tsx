import { TotalContainer, ButtonContainer } from './styles';
import { ProductCart } from './ProductCart';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export function Order() {
  // Context
  const { cart, findProductById } = useContext(CartContext);

  function Products() {
    console.log(cart);
    if (cart) {
      const productsInCart = cart.map(order => findProductById(order.productId));
      if (productsInCart) {
        return productsInCart.map(product => {
          if (product) return ProductCart(product);
        });
      }
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
              <td align='right'>$ 29.70</td>
            </tr>
            <tr>
              <td align='left'>Delivery</td>
              <td align='right'>$ 3.50</td>
            </tr>
            <tr>
              <th align='left'>Total</th>
              <th align='right'>$ 33.20</th>
            </tr>
          </tbody>
        </table>
      </TotalContainer>
      <ButtonContainer>Confirm order</ButtonContainer>
    </span>
  );
}