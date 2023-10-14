import { BuyContainer, ItemContainer, PriceContainer, TagContainer } from './styles';
import { Counter } from '../../../components/Counter';
import { Cart } from '../../../components/Cart';
import { ColorTheme } from '../../../constants/ColorTheme';

export interface ProductType {
  id: string,
  title: string,
  tags: Array<string>,
  description: string,
  thumbnail: string,
  price: number,
}

export function ProductCard({
  title,
  tags,
  description,
  thumbnail,
  price,
}: ProductType) {
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
        <Counter />
        <Cart colorTheme={ColorTheme.purple} />
      </BuyContainer>
    </ItemContainer>
  );
}