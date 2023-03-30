import styled from "styled-components";

export const UserHeaderNavStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    &:hover,
    &:focus {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }
  }
  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    & svg > * {
      fill: #fb1;
    }
  }
`;
