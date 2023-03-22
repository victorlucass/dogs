import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    padding-top: 4rem;
    margin: 0px;
    color: #333;
    font-family: ${(props) => props.theme.fonts.typeFirst};
  }
  h1, h2, h3, h4, p{
    margin: 0px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button, input {
    display: block;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.typeFirst};
  }
  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;
  }

  @keyframes animeLeft {
    to{
      opacity: 1;
      transform: initial;
    }
  }
`;
