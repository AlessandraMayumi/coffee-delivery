import tradicional from '../,,/../../../assets/tradicional.svg';
import latte from '../,,/../../../assets/latte.svg';
import { TotalContainer, ButtonContainer } from './styles';
import { ProductCart } from './ProductCart';

export function Order() {
  function Products() {
    return (
      <>
        {ProductCart({
          title: 'Expresso Tradicional',
          price: 9.90,
          thumbnail: tradicional
        })}
        {ProductCart({
          title: 'Latte',
          price: 12.90,
          thumbnail: latte
        })}
      </>
    );
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