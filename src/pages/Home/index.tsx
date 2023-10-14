import { useState } from 'react';
import { CoffeeCard, CoffeeCardType } from './CoffeeCard';
import { CoffeeListContainer, HomeContainer } from './styles';
import { COFFEE_LIST } from '../../constants/catalog';

export function Home() {
  const [coffees, setCoffees] = useState<Array<CoffeeCardType>>(COFFEE_LIST);

  const CoffeeList = coffees.map(c => {
    const { title, tags, description, thumbnail, price } = c;
    return (
      <CoffeeCard
        key={title}
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
      <CoffeeListContainer>
        {CoffeeList}
      </CoffeeListContainer>
    </HomeContainer>
  );
}