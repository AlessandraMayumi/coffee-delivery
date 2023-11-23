import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    color: ${props => props.theme['yellow-dark']};
  }

  h3 {
    font-weight: normal;
  }

  img {
    width: 30rem;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 30rem;
  padding: 2.5rem;
  margin-top: 2rem;;
  
  gap: 2rem;

  border: 1px solid ${props => props.theme['yellow-dark']};
  border-radius: 6px 36px;

  span {
    display: flex;
    flex-direction: row;
    height: 2.5rem;
    gap: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    width: 2.5rem;
  }
`;
