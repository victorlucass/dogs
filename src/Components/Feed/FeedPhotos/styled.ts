import styled from "styled-components";
import visualizacaoSvg from "../../../assets/visualizacao.svg";

export const FeedPhotosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedPhotosItemContainer = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;

    &::before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${visualizacaoSvg}) no-repeat;
    }
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }
  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
