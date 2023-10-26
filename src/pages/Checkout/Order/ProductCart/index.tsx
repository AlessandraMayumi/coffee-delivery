import { ProductContainer, InfoContainer, ThumbnailContainer, ButtonContainer, IconContainer } from './styles';
import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext, CartProductType } from '../../../../context/CartContext';
import { InputNumber } from '../../../../components/InputNumber';

export function ProductCart({ id, title, thumbnail, price, quantity }: CartProductType) {
  const { removeFromCart, incrementCart, decrementCart } = useContext(CartContext);

  return (
    <ProductContainer key={title}>
      <ThumbnailContainer>
        <img src={thumbnail} />
      </ThumbnailContainer>
      <InfoContainer>
        <h3>{title}</h3>
        <nav>
          {InputNumber({
            quantity,
            minus: () => decrementCart(id),
            plus: () => incrementCart(id),
          })}
          <ButtonContainer onClick={() => removeFromCart(id)}>
            <IconContainer><Trash size={20} /></IconContainer>
            <p>Remove</p>
          </ButtonContainer>
        </nav>
      </InfoContainer>
      <strong>$ {price.toFixed(2)}</strong>
    </ProductContainer>
  );
}