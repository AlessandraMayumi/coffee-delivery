import { NavLink } from 'react-router-dom';
import { MapPin } from 'phosphor-react';
import logo from '../../assets/logo-coofee-delivery.svg';
import { Cart } from '../Cart';
import { HeaderContainer, LocationContainer } from './styles';
import { ROUTE_CHECKOUT, ROUTE_HOME } from '../../constants/routes';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={ROUTE_HOME} title='Home '><img src={logo} /></NavLink>
      <nav>
        <LocationContainer><MapPin size={24} weight="fill" /><p>Location, LL</p></LocationContainer>
        <NavLink to={ROUTE_CHECKOUT} title='Checkout '>
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}