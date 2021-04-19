import { createGlobalStyle } from "styled-components";
import { BLACK_10, OFF_WHITE, PIZARRA } from "./colors";
import { reset } from "./reset";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};

  * {
    color: ${OFF_WHITE};
    font-style: normal;
    font-family: 'Fabriga Regular', sans-serif;
  }
  
  #root{
    display: grid;
    grid-template-rows: 6rem auto 4rem;
    grid-template-columns: 4rem auto 4rem;
    grid-template-areas:
      "header header header"
      "main main main"
      "footer footer footer";
  }
  
  body {
    background-color: ${PIZARRA};
    margin: 0;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 200;
    height: 100vh;
  }

  button {
    font-family: 'Noto-sans', sans-serif;
    font-size: 1.1rem;
    border: 0;
    border-radius: 3px;    
    cursor: pointer;
  }
  
  main{
    grid-area: main;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  
  main section {
    display: flex;
    justify-content: center;
  }
`;
