import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    font-size: 62.5%; // Base font-size, all REM are calculated from this
    box-sizing: border-box;
  }

  body {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    font: inherit;
  }

  [role="button"],
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  } 

  /** Internet Explorer Global Styles */
  .support-IE11 {
    input::-ms-clear {
      display: none;
    }
  }
`;
