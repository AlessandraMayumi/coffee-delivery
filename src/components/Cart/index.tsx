import { ShoppingCart } from 'phosphor-react';
import { CartContainer } from './styles';
import { ColorTheme } from '../../constants/ColorTheme';

interface CartProps {
  colorTheme?: string
}

export function Cart({ colorTheme = ColorTheme.yellow }: CartProps) {
  return (
    <CartContainer $colorTheme={colorTheme}>
      <ShoppingCart size={24} weight='fill' />
    </CartContainer>
  );
}