import { BuyContainer, CartContainer, ItemContainer, PriceContainer, TagContainer } from './styles';
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { InputNumber } from '../../../components/InputNumber';

export interface ProductType {
  id: string,
  title: string,
  tags: Array<string>,
  description: string,
  thumbnail: string,
  price: number,
}

export function ProductCatalog({
  id,
  title,
  tags,
  description,
  thumbnail,
  price,
}: ProductType) {
  // Context
  const { addOrUpdateCart } = useContext(CartContext);
  // State
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  function Tags() {
    return tags.map(tag => <h3 key={title + tag}>{tag}</h3>);
  }

  return (
    <ItemContainer>
      <img src={thumbnail} />
      <TagContainer>{Tags()}</TagContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <BuyContainer>
        <PriceContainer>$<h2>{price.toFixed(2)}</h2></PriceContainer>

        {InputNumber({
          quantity,
          minus: decrement,
          plus: increment,
        })}

        <CartContainer onClick={() => addOrUpdateCart({ productId: id, quantity })}>
          <ShoppingCart size={24} weight='fill' />
        </CartContainer>

      </BuyContainer>
    </ItemContainer>
  );
}