import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: 90rem;
    height: 100vh;
    margin: auto;
    padding: 0 10rem; // padding only right left
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['background']};
`;
