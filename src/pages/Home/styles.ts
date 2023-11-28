import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    margin-bottom: 2rem;
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 4rem 0;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    margin-top: -5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;
    gap: .8rem;
    align-items: center;
    margin-bottom: 1rem;
  }
`;