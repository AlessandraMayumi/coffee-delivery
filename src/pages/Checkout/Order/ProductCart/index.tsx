import { ProductContainer, InfoContainer, ThumbnailContainer, ButtonContainer, IconContainer } from './styles';
import { InputNumber } from '../../../../components/InputNumber';
import { ProductType } from '../../../Home/ProductCatalog';
import { Trash } from 'phosphor-react';

export function ProductCart({ title, thumbnail, price }: ProductType) {
  return (
    <ProductContainer key={title}>
      <ThumbnailContainer>
        <img src={thumbnail} />
      </ThumbnailContainer>
      <InfoContainer>
        <h3>{title}</h3>
        <nav>
          <InputNumber />
          <ButtonContainer>
            <IconContainer>
              <Trash size={20} />
            </IconContainer>
            <p>Remove</p>
          </ButtonContainer>
        </nav>
      </InfoContainer>
      <strong>$ {price.toFixed(2)}</strong>
    </ProductContainer>
  );
}