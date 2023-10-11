import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../assets/logo-coofee-delivery.svg';
import { CartContainer, HeaderContainer, LocationContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <a href='/' target=''><img src={logo} /></a>
      <nav>
        <LocationContainer><MapPin size={24} weight="fill" /><p>Location, LL</p></LocationContainer>
        <NavLink to='/checkout' title='Checkout '><CartContainer><ShoppingCart size={24} weight='fill' /></CartContainer></NavLink>
      </nav>
    </HeaderContainer>
  );
}