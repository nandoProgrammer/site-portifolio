import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
    
    colors: {
        background: '#0E0E0E',
        bluePrimary: '#0808ED',
        blueSecondary: '#2667C9',
        blueText: '#0808ED',
        white: '#FFFFFF',
        purple: '#622FF2'
    },
    fonts: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    fontSizes: {
      small: '.8rem',
      normal: '1rem',
      large: '1.2rem',
      title: '1.3rem',
      subtitle: '1.25rem',
    },
    breakpoints: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  };
  
  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;
