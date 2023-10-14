import styled from 'styled-components';

export const FormContainer = styled.form`
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
`;