import { BuyContainer, CartContainer, IconContainer, InputNumberContainer, ItemContainer, PriceContainer, TagContainer } from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

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
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
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

        <InputNumberContainer>
          <IconContainer onClick={decrement}><Minus size={12} /></IconContainer>
          <p>{count}</p>
          <IconContainer onClick={increment}><Plus size={12} /></IconContainer>
        </InputNumberContainer>

        <CartContainer onClick={() => addOrUpdateCart({ productId: id, quantity: count })}>
          <ShoppingCart size={24} weight='fill' />
        </CartContainer>

      </BuyContainer>
    </ItemContainer>
  );
}