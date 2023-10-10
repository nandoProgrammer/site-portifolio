import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle` 
  :root {
    --bg-primary: rgb(14, 14, 14);
  }

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-primary);
    overflow-x: hidden;
  }
`;
export default GlobalStyle;