import { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { CartContainer, CounterContainer } from './styles';
import { ColorTheme } from '../../constants/ColorTheme';
import { CartContext } from '../../context/CartContext';

interface CartProps {
  colorTheme?: string
}

export function Cart({ colorTheme = ColorTheme.yellow }: CartProps) {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <CartContainer $colorTheme={colorTheme}>
        <ShoppingCart size={24} weight='fill' />
      </CartContainer>
      {!!cartCount && <CounterContainer>{cartCount}</CounterContainer>}
    </>
  );
}