import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }
  body{
    background-color: ${(props) => props.theme.colors.background};
  }
`;
