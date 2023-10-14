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

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem
`;
