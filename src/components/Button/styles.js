import styled from "styled-components";

export const Button = styled.button`
  background: #8b005d;
  border: 1px solid #8b005d;
  border-radius: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  color: white;
  cursor: pointer;
  font: inherit;
  height: 2.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 0.5rem;
  width: 9rem;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
