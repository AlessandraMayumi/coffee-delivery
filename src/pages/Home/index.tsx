import { CoffeeCard } from '../../components/CoffeeCard';
import { CoffeeListContainer, HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <h1>Banner</h1>
      <CoffeeListContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContainer>
    </HomeContainer>
  );
}