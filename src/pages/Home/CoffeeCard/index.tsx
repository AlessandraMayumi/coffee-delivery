import { BuyContainer, CardContainer, PriceContainer, TagContainer } from './styles';
import { Counter } from '../../../components/Counter';
import { Cart, ColorTheme } from '../../../components/Cart';

export interface CoffeeCardType {
  title: string,
  tags: Array<string>,
  description: string,
  thumbnail: string,
  price: number,
}

export function CoffeeCard({
  title,
  tags,
  description,
  thumbnail,
  price,
}: CoffeeCardType) {
  function Tags() {
    return tags.map(tag => <h3 key={title + tag}>{tag}</h3>);
  }
  return (
    <CardContainer>
      <img src={thumbnail} />
      <TagContainer>{Tags()}</TagContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <BuyContainer>
        <PriceContainer>$<h2>{price.toFixed(2)}</h2></PriceContainer>
        <Counter />
        <Cart colorTheme={ColorTheme.purple} />
      </BuyContainer>
    </CardContainer>
  );
}