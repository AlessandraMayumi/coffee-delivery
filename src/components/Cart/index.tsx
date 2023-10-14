import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { CartContainer } from './styles';

export enum ColorTheme {
  yellow = 'yellow',
  purple = 'purple',
}

interface CartProps {
  colorTheme?: string
}

export function Cart({ colorTheme=ColorTheme.yellow }: CartProps) {
  return (
    <NavLink to='/checkout' title='Checkout '>
      <CartContainer colorTheme={colorTheme}>
        <ShoppingCart size={24} weight='fill' />
      </CartContainer>
    </NavLink>
  );
}