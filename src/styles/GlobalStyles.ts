import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.primaryColor};
  }

  body, button, input {
    font-family: 'Work Sans', sans-serif;
  }
`