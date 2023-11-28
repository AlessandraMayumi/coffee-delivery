import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'phosphor-react';
// Context
import { AddressContext } from '../../context/AddressContext';
// Routes
import { ROUTE_CHECKOUT, ROUTE_HOME } from '../../constants/routes';
// Components
import { Cart } from '../Cart';
// Styles
import { HeaderContainer, LocationContainer } from './styles';
import logo from '../../assets/logo-coofee-delivery.svg';


export function Header() {
  const { address } = useContext(AddressContext);
  const { city, state } = address;

  return (
    <HeaderContainer>
      <NavLink to={ROUTE_HOME} title='Home '><img src={logo} /></NavLink>
      <nav>
        <LocationContainer><MapPin size={24} weight="fill" /><p>{city}, {state}</p></LocationContainer>
        <NavLink to={ROUTE_CHECKOUT} title='Checkout '>
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}