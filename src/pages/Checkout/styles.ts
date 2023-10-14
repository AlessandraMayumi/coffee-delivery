import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;

    width: 40rem;
    border-radius: 6px;
    padding: 2.5rem;

    background: ${props => props.theme['base-card']};

    h3 {
      font-weight: normal;
    }

    nav { 
      display: flex;
      flex-direction: row;
      margin-bottom: 1.5rem;
      gap: .5rem;

      i {
        color: ${props => props.theme['yellow-dark']};
      }
    }

    form {
      input {
        background: ${props => props.theme['base-input']};

        width: 100%;
        margin: .5rem 0;
        padding: .7rem;
        border-radius: 4px;
        border: 1px solid ${props => props.theme['base-button']};

        &:focus-visible {
            border: 1px solid ${props => props.theme['yellow-dark']};
        }
      }
    }
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 28rem;
    height: 19rem;
    padding: 1rem;
    border-radius: 6px 36px 6px 36px;

    background: ${props => props.theme['base-card']};
  }
`;
