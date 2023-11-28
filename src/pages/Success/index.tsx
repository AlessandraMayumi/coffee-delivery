import { useContext } from 'react';
import { AddressContext } from '../../context/AddressContext';
import { InfoContainer, ResumeContainer, SuccessContainer } from './styles';
import banner from '../../assets/banner-success.svg';
import local from '../../assets/icon-local.svg';
import time from '../../assets/icon-time.svg';
import payment from '../../assets/icon-payment.svg';

export function Success() {
  const { address } = useContext(AddressContext);
  const { state, city, address: street, complement } = address;

  return (
    <SuccessContainer>
      <ResumeContainer>
        <h2>Uhu! Order confirmed</h2>
        <h3>Now just wait, soon the coffee will arrive to you.</h3>
        <InfoContainer>
          <span>
            <img src={local} />
            <div>
              <p>Delivery on <strong>{street} {complement}</strong></p>
              <p>{city}, {state}</p>
            </div>
          </span>
          <span>
            <img src={time} />
            <div>
              <p>Delivery estimate</p>
              <strong>20 min - 30 min VARIABLE</strong>
            </div>
          </span>
          <span>
            <img src={payment} />
            <div>
              <p>Payment upon delivery</p>
              <strong>Cerdit Card VARIABLE</strong>
            </div>
          </span>
        </InfoContainer>
      </ResumeContainer>
      <img src={banner} />
    </SuccessContainer>
  );
}