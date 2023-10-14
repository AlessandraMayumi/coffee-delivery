import { useState } from 'react';
import { ProductCard, ProductType } from './ProductCard';
import { ProductListContainer, HomeContainer } from './styles';
import { COFFEE_LIST } from '../../constants/catalog';

export function Home() {
  const [coffees, setCoffees] = useState<Array<ProductType>>(COFFEE_LIST);

  const ProductList = coffees.map(c => {
    const { id, title, tags, description, thumbnail, price } = c;
    return (
      <ProductCard
        key={id}
        id={id}
        title={title}
        tags={tags}
        description={description}
        thumbnail={thumbnail}
        price={price}
      />
    );
  });

  return (
    <HomeContainer>
      <h1>Our coffees</h1>
      <ProductListContainer>
        {ProductList}
      </ProductListContainer>
    </HomeContainer>
  );
}