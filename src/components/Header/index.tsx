import { MapPin } from 'phosphor-react';
import logo from '../../assets/logo-coofee-delivery.svg';
import { HeaderContainer, LocationContainer } from './styles';
import { Cart } from '../Cart';

export function Header() {
  return (
    <HeaderContainer>
      <a href='/' target=''><img src={logo} /></a>
      <nav>
        <LocationContainer><MapPin size={24} weight="fill" /><p>Location, LL</p></LocationContainer>
        <Cart />
      </nav>
    </HeaderContainer>
  );
}