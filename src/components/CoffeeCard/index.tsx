import coffee from '../../assets/tradicional.svg';
import { BuyContainer, CardContainer } from './styles';
import { Counter } from '../Counter';
import { Cart, ColorTheme } from '../Cart';

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffee} />
      <h6>tradicional</h6>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional cafe feito com agua quente e graos moidos</p>
      <BuyContainer>
        <h2>$9.90</h2>
        <Counter />
        <Cart colorTheme={ColorTheme.purple}/>
      </BuyContainer>
    </CardContainer>
  );
}