import { useContext } from 'react';
import { ProductCatalog } from './ProductCatalog';
import { ProductListContainer, HomeContainer } from './styles';
import { CartContext } from '../../context/CartContext';

export function Home() {
  // Context
  const { products } = useContext(CartContext);

  const ProductList = products.map(p => {
    const { id, title, tags, description, thumbnail, price } = p;
    return (
      <ProductCatalog
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