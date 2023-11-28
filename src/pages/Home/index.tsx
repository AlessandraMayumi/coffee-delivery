import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ProductCatalog } from './ProductCatalog';
import { ProductListContainer, HomeContainer, IntroContainer, TopicsContainer, DescriptionContainer } from './styles';
import banner from '../../assets/banner.svg';
import cart from '../../assets/icon-cart.svg';
import time from '../../assets/icon-time.svg';
import pac from '../../assets/icon-pac.svg';
import cup from '../../assets/icon-cup.svg';

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
      <IntroContainer>
        <DescriptionContainer>
          <h1>Find the perfect coffee for any time of day</h1>
          <h3>With Coffee Delivery, you receive your coffee wherever you are, at any time</h3>
          <TopicsContainer>
            <div>
              <span>
                <img src={cart}/>
                <p>Simple and secure purchase</p>
              </span>
              <span>
                <img src={time} />
                <p>Fast and tracked delivery</p>
              </span>
            </div>
            <div>
              <span>
                <img src={pac} />
                <p>Packaging keeps the coffee intact</p>
              </span>
              <span>
                <img src={cup} />
                <p>The coffee arrives fresh to you</p>
              </span>
            </div>
          </TopicsContainer>
        </DescriptionContainer>
        <img src={banner} />
      </IntroContainer>
      <h1>Our coffees</h1>
      <ProductListContainer>
        {ProductList}
      </ProductListContainer>
    </HomeContainer>
  );
}