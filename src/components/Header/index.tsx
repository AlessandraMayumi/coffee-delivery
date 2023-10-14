import { NavLink } from 'react-router-dom';
import { MapPin } from 'phosphor-react';
import logo from '../../assets/logo-coofee-delivery.svg';
import { Cart } from '../Cart';
import { HeaderContainer, LocationContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <a href='/' target=''><img src={logo} /></a>
      <nav>
        <LocationContainer><MapPin size={24} weight="fill" /><p>Location, LL</p></LocationContainer>
        <NavLink to='/checkout' title='Checkout '>
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}