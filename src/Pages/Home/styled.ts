import styled from "styled-components";

export const HomeContainer = styled.div.attrs({
  className: "container",
})`
  span {
    font-family: ${({ theme }) => theme.fonts.typeFirst};
  }
`;

export const MainContainer = styled.section`
  margin-top: 4rem;
`;
