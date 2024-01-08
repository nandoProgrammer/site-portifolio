import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: ${(props) => props.theme.font.family};
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:  ${(props) => props.theme.colors.primary};
    overflow-x: hidden;
  }
`;
export default GlobalStyle;