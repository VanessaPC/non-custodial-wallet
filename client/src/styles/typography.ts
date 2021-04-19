import styled, { css } from "styled-components";
import { WHITE, BLACK_10, OFF_WHITE } from "./colors";

export const typography = css`
  * {
    text-align: left;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0;
    font-weight: 600;
    text-align: left;
    background-color: ${WHITE};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    // color: ${BLACK_10};
    color: ${OFF_WHITE};
    @-moz-document url-prefix() {
      font-weight: lighter;
    }
  }
  /* h1 */
  h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.75rem;
    line-height: 2.25rem;
    padding: 0.8rem 0;
  }

  /* h2 */
  h2 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: -0.01em;
    padding: 0.5rem 0;
  }

  /* h3 */
  h3 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
    padding: 0.4rem 0;
  }

  /* body */
  p {
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.02rem;
    line-height: 1.5rem;
  }
  /* span = subtext  */
  span,
  button {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8125rem;
    line-height: 1rem;
    letter-spacing: 0.02rem;
  }

  button {
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }

  /* Body BOLD - h5 / strong */
  h4 {
    font-family: "Noto Sans", sans-serif;
    line-height: 1.25rem;
    font-size: 0.8125rem;
    letter-spacing: 0.01rem;
  }

  /* Subtext BOLD */
  input {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    background: inherit;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
