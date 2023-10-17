import { ProductContainer, InfoContainer, ThumbnailContainer, ButtonContainer, IconContainer } from './styles';
import { InputNumber } from '../../../../components/InputNumber';
import { ProductType } from '../../../Home/ProductCatalog';
import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function ProductCart({ id, title, thumbnail, price }: ProductType) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <ProductContainer key={title}>
      <ThumbnailContainer>
        <img src={thumbnail} />
      </ThumbnailContainer>
      <InfoContainer>
        <h3>{title}</h3>
        <nav>
          <InputNumber />
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