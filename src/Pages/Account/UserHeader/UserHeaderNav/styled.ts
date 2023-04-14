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
  &.navMobile {
    a,
    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
    }
    button {
      border-bottom: none;
    }
    svg {
      margin-right: 0.5rem;
    }
    a:hover svg > *,
    button:hover button > * {
      fill: #fb1;
    }
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  &.navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }
`;

export const ButtonMenu = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  padding: 0px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px 0 0 currentColor, 0 -6px 0 0 currentColor;
    transition: 0.2s;
  }
  &:focus,
  &:hover,
  &.mobileButtonActive {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
  &.mobileButtonActive::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
