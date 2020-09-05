import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    min-height: 100%;
    font-size: 2rem;
    background-color: #313030;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  body,
  input {
    font-family: Roboto, Arial, Arial, sans-serif;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.4rem;
  }
`;

export default GlobalStyles;