import styled from 'styled-components';

export const LayoutContainer = styled.div`
    width: 90rem;
    height: 100%;
    margin: auto;
    padding: 0 10rem 10rem 10rem ;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['background']};
`;
