import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.typeFirst};
  border: none;
  background: #fb1;
  color: #764701;
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 8rem;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
