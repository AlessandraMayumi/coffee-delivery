import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a:link {
    text-decoration: none;
  }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center; // fix text alignment
  padding: 0.5rem;
  border-radius: 4px;
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};
  p {
    color: ${props => props.theme['purple-dark']};
  }
`;
